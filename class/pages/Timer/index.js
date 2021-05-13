import {useState} from 'react';
export default function TImerPage() {
  const[permission, setPermission] = useState(false);
  const[tictoc, setTictoc] = useState('00:00');

  function handleClickSendAuth() {
    let time = 10;

    const startTimer = setInterval(function () {
      setPermission(false);
      let min = String(Math.floor(time / 60)).padStart(2,'0');
      let sec = String(time % 60).padStart(2,'0');
      time--;
      setTictoc(`${min} : ${sec}`);
      if(time < 0 ){
        clearInterval(startTimer);
        setPermission(true);
      }
    },1000)
  }
    return(
    <div>
      <div>
      <input type='text'></input>
      <button onClick={handleClickSendAuth}>인증번호 전송</button>
      </div>
      <div>
        <span>{tictoc}</span>
        <button disabled={permission}>인증완료</button>
      </div>

    </div>
  )
}