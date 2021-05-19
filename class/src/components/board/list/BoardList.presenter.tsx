import { Wrapper, Table_Header, Table_Header_Checkbox, Table_Header_Number, Table_Header_Title, Table_Header_Date, Table_Body, Table_Body_literable, Table_Body_Checkbox, Table_Body_Number, Table_Body_Title, Table_Body_Date, UnSelectButton} from './BoardList.styles';
import {useState} from 'react';
//import { checkDocument } from '@apollo/client/utilities';


const BoardListUI = ({data}) => {
  
  const [checked, SetChecked] = useState([]);
  
  
  const handleCheck = (e) => {
    // console.log(e)
    if(e.target.checked){
      SetChecked([...checked, e.target.id])
      console.log(checked);
    } else if(!e.target.checked && checked.includes(e.target.id)){
      SetChecked(prev => prev.filter(checkedList => {
        return checkedList != e.target.id;
      }
      ))
      console.log(checked);
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
    <>
    <Wrapper>
      <Table_Header>
        <Table_Header_Checkbox><input type="checkbox"></input></Table_Header_Checkbox>
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
          <Table_Body_Checkbox ><input id={data.number}  type="checkbox" onClick={handleCheck}></input></Table_Body_Checkbox>
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

export default BoardListUI;