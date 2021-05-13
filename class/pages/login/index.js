import {useState} from 'react';
import {Page, LoginContainer, Title, Input, Waring, Button, Password} from '../../styles/LoginStyle.js'
function LoginPage(){

  const[email, setEmail] = useState();
  const[pw, setPw] = useState();
  
  function login(){
    if(!email.includes('@') || !email.includes('.'))
    {
     document.getElementById('waring').innerText = '이메일이 유효하지 않습니다';
     return;

    } else if(pw.length < 7) {
      alert('비밀번호가 유효하지 않습니다.');
      return;
    }
    console.log('Login');
    console.log(email);
    console.log(pw);
  }

  function emailChange(e){
    const temp = e.target.value;
    setEmail(temp);
  }
  function passwordChange(e){
    const temp = e.target.value;
    setPw(temp);
  }
  return(
    <>
    <Page>
    <LoginContainer>
    <Title>로그인</Title>
    <div>Email : <Input name= "email" type="text" onChange={emailChange}/></div>
    <div>Password : <Password name="password" type="password" onChange={passwordChange}/></div>
    <Waring id="waring"></Waring>
    <Button onClick={login}>login</Button>
    </LoginContainer>
    </Page>
    </>
  )
}
export default LoginPage;