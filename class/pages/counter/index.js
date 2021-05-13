function CounterPage(){
  //This is for Js
  let count = 0;

  function counter(){
    count++;
    console.log(count);
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