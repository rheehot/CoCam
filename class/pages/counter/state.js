import {useState} from 'react';

function CounterPage(){
  //This is for Js
  //let count = 0
  const [count, setCount] = useState(0)//리엑트에서 사용하는기능

  const counter = () => {
    setCount(prev => prev + 1)//하나의 함수가 된다.
    //let은 콘솔에서 밖에 증가가 안됫다. html에 값을 다시 뿌려줘야 하는데 이는 setcount안에 존재한다.
    //count를 ++하고 올려준것을 바탕으로 html을 재 랜더링한다.
  }
  //This is for HTML
  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>Count Plus</button>
    </>
  )
}

export default CounterPage;