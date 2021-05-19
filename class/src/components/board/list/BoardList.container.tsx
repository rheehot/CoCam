import BoardListUI3 from './BoardList.presenter3';
import {BOARD_LIST} from './BoardList.queries';
import{useQuery} from "@apollo/client";



const BoardList = () => {
  const getBoardData = BOARD_LIST;

  

  const{data, loading, error} = useQuery(getBoardData)
  console.log(data);
  if(loading){
    return <p>loading</p>;
  }

  return(
    <BoardListUI3
    data = {data}
    />
  )
}

export default BoardList;