import { Wrapper, Table_Header, Table_Header_Checkbox, Table_Header_Number, Table_Header_Title, Table_Header_Date, Table_Body, Table_Body_literable, Table_Body_Checkbox, Table_Body_Number, Table_Body_Title, Table_Body_Date, UnSelectButton} from './BoardList.styles';
import {useState} from 'react';
import { checkDocument } from '@apollo/client/utilities';



const BoardListUI2 = ({data}) => {

  const[checkedAll, setCheckedAll] = useState(false);
  const [checked, SetChecked] = useState({
    //각 버튼들의 체크 상태 기록.

  });
  
  const handleCheck = (e) => {
    ////체크 상태 변경
    console.log(e.target.checked)
    const newChecked = {...checked, [e.target.id] : e.target.checked}
    SetChecked(newChecked);
    console.log(newChecked);
    ///

    const values = []
    for(let i = 0 ; i<data.fetchBoards.length; i++){
      values.push(newChecked[data.fetchBoards[i].number]); //새로운 배열에 값을 저장.
    }
    const filterValues = values.filter(data => data === true)//트루인 친구들만 저장해주자, 근데 길이의 값이 서로 같다면? 모조리 체크되어 있는것이다.
    if(data.fetchBoards.length === filterValues.length){ //모조리 체크 된 상태라면 헤더의 체크박스를 처리해버리자.
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }

  const handleCheckAll = (e) => {
    const newCheckAll = e.target.checked
    if(newCheckAll){
      let newCheck = {};
      for(let i=0; i<data.fetchBoards.length ; i++){
        newCheck = {...newCheck, [data.fetchBoards[i].number] : true};
      }
      console.log(newCheck);
      SetChecked(newCheck);
      setCheckedAll(true);

    } else {
      let newCheck = {};
      for(let i=0; i<data.fetchBoards.length ; i++){
        newCheck = {...newCheck, [data.fetchBoards[i].number] : false};
      }
      console.log(newCheck);
      SetChecked(newCheck);
      setCheckedAll(false);
    }
    
  } 




  return(
    <>
    <Wrapper>
      <Table_Header>
        <Table_Header_Checkbox><input type="checkbox" checked={checkedAll} onClick={handleCheckAll}></input></Table_Header_Checkbox>
        <Table_Header_Number>번호</Table_Header_Number>
        <Table_Header_Title>제목</Table_Header_Title>
        <Table_Header_Date>작성일</Table_Header_Date>
      </Table_Header>
      {/* filter(arr=> {
        if(arr.number >=300 && arr.number <=400){
          return arr
        }
        }) */}
      <Table_Body>
      {data?.fetchBoards.slice(0,10).map(data => (
        <Table_Body_literable>
          <Table_Body_Checkbox ><input id={data.number}  type="checkbox" onClick={handleCheck} checked={checked[data.number]}></input></Table_Body_Checkbox>
          <Table_Body_Number >{data.number}</Table_Body_Number>
          <Table_Body_Title>{data.title}</Table_Body_Title>
          <Table_Body_Date>{data.createdAt.slice(0,10).replace(/-/gi, '.')}</Table_Body_Date>
        </Table_Body_literable>
        ))}
        </Table_Body>
        <UnSelectButton>선택 삭제</UnSelectButton>
    </Wrapper>
     
     </>
  )
}

export default BoardListUI2;