import {RegisterButton, Blue, Red} from './QueryWrite.styles'
const QueryWriteUI = ({handleOnProFile,handleOnChange,handleIsTrue,isTrue}) => {
  
  return(
    <div>
    <span>이름 : </span><input type="text" name = 'name' onChange={handleOnChange}></input>
    <span>나이 : </span><input type="number" name = 'age' onChange={handleOnChange}></input>
    <span>학교 : </span><input type="text" name = 'school' onChange={handleOnChange}></input>
    <button onClick={handleIsTrue}> </button>
    {/* <RegisterButton onClick={handleOnProfile} makaron={true}>버튼이름</RB> */}
     {isTrue? <Blue onClick={handleOnProFile}>프로필 등록하기</Blue>:
     <Red onClick={handleOnProFile}>프로필 등록하기</Red>}
    {isTrue ? <Blue>aa</Blue> : <Red>ss</Red>}
  </div>
  )
}

export default QueryWriteUI