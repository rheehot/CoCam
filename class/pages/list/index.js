import styled from '@emotion/styled'

const Bolder = styled.div`
  font-size: 20px;
  font-weight:'bolder';
`
const Inliner = styled.div`
  display:flex;
  flex-direction:row;
`

export default function listPage() {

  //const aaa =[<div>철수</div>,<div>영희</div>,<button>클릭쿵</button>]
  const aaa = [
    {number : 1, title: '레드향'},
    {number : 2, title: '샤인머스켓'},
    {number : 3, title: '산청딸기'},
    {number : 4, title: '한라봉'},
    {number : 5, title: '사과'},
    {number : 6, title: '애플망고'},
    {number : 7, title: '딸기'},
    {number : 8, title: '천혜향'},
    {number : 9, title: '과일선물세트'},
    {number : 10, title: '귤'},
  ]
  let ccc = aaa.filter(arr => {
    if(arr.number % 2 === 0){
      return arr
    }
  })

  let bbb = ccc.map((data) => (
    <Inliner>
      <Bolder>{data.number}</Bolder> : {data.title}
    </Inliner>
  ));

  const classmates = ['철수','영희','후니'];

  return(
    <div>
      <div>
        {aaa.filter(arr => {
        if(arr.number % 2 === 0){
          return arr
        }
        }).map((data) =>(
          <Inliner>
          <Bolder>{data.number}</Bolder> : {data.title}
          </Inliner>
        ))}
      </div>
      <button>클릭쿵</button>
    </div>
  )
}