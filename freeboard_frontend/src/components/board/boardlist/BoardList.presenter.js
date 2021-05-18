import {Wrapper, Table_Header, Table_Header_Checkbox, Table_Header_Number, Table_Header_Title, Table_Header_Date, Table_Body, Table_Body_literable, Table_Body_Checkbox, Table_Body_Number, Table_Body_Title, Table_Body_Date, UnSelectButton} from './BoardList.styles';
import {useState} from 'react';

const BoardListUI = ({data}) => {

  return(
    <>
    <Wrapper>
      <Table_Header>
        <Table_Header_Number>번호</Table_Header_Number>
        <Table_Header_Title>제목</Table_Header_Title>
        <Table_Body_Date>작성자</Table_Body_Date>
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
          <Table_Body_Number ></Table_Body_Number>
          <Table_Body_Title>{data.title}</Table_Body_Title>
          <Table_Body_Date>{data.writer}</Table_Body_Date>
          <Table_Body_Date>{data.createdAt.slice(0,10).replace(/-/gi, '.')}</Table_Body_Date>
        </Table_Body_literable>
        ))}
        </Table_Body>
    </Wrapper>
     
     </>
  )
}

export default BoardListUI;