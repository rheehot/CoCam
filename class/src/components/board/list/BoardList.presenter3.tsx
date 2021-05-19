import { Wrapper, Table_Header, Table_Header_Checkbox, Table_Header_Number, Table_Header_Title, Table_Header_Date, Table_Body, Table_Body_literable, Table_Body_Checkbox, Table_Body_Number, Table_Body_Title, Table_Body_Date, UnSelectButton} from './BoardList.styles';
import {useState} from 'react';
import { checkDocument } from '@apollo/client/utilities';



const BoardListUI3 = ({data}) => {

  const[checkedAll, setCheckedAll] = useState(false);
  const[checked, SetChecked] = useState([]); //이번엔 배열로.
  
  const handleCheck = (e) => {
    const number = Number(e.target.id);
    ////체크 상태 변경
    let newChecked = [];
    if(checked.includes(number)){
      newChecked = checked.filter(data => data !== number)
      SetChecked(newChecked);
      console.log(checked);
    } else {
      newChecked = [...checked, number]
      SetChecked(newChecked);
      console.log(checked);
    }
    ///

    if(data.fetchBoards.length === newChecked.length){
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }

  const handleCheckAll = (e) => {
    const newCheckAll = e.target.checked
    if(newCheckAll){
      const newCheck = data.fetchBoards.map(data => data.number)
      SetChecked(newCheck);
      setCheckedAll(true);

    } else {
      const newCheck =[]
      SetChecked(newCheck);
      setCheckedAll(false);
    }
    
  } 



  const setCheckboxState = (e) => {
    if(checked.includes(e.target.id)){
      return false;
    } else {
      return true;
    }
  }

  

  return(
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
      {data.fetchBoards.slice(0,10).map(data => (
        <Table_Body_literable>
          <Table_Body_Checkbox ><input id={data.number}  type="checkbox" onClick={handleCheck} checked={checked.includes(data.number)}></input></Table_Body_Checkbox>
          <Table_Body_Number >{data.number}</Table_Body_Number>
          <Table_Body_Title>{data.title}</Table_Body_Title>
          <Table_Body_Date>{data.createdAt.slice(0,10).replace(/-/gi, '.')}</Table_Body_Date>
        </Table_Body_literable>
        ))}
        </Table_Body>
        <UnSelectButton>선택 삭제</UnSelectButton>
    </Wrapper>
  )
}

export default BoardListUI3;