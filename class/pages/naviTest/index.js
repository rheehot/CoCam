import {LogContainer, Title, Label2, Input2} from '../../styles/naviStyle.js'

export default function BBB(){
  //자바스크립트 부분
  let test = 1;
  
  return(
    <LogContainer>
      <Title>로그인</Title>
      <Label2>이메일</Label2>
      <Input2 type="email"/>
      <Label2>비밀번호</Label2>
      <Input2 type="password"/>
    </LogContainer>
  )
}
