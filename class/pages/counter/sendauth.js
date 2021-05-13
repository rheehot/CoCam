import {useState} from 'react';

function sendauth(){
 
  const [auth, setAuth] = useState('000000');//리엑트에서 사용하는기능

  const counter = () => {
    let authPass = String(Math.floor(Math.random()*1000000)).padStart(6,'0');
    setAuth(prev => prev = authPass);
    //count를 ++하고 올려준것을 바탕으로 html을 재 랜더링한다.
  }
  //This is for HTML
  return (
    <>
      <div>{auth}</div>
      <button onClick={counter}>send Auth</button>
    </>
  )
}

export default sendauth;