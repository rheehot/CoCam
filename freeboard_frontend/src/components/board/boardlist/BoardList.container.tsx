import BoardListUI from './BoardList.presenter';
import {BOARD_LIST} from './BoardList.queries';
import {useQuery} from '@apollo/client';

const BoardList = () =>{
  const getBoard = BOARD_LIST;

  const{data, loading, error} = useQuery(getBoard);
  console.log(data);
  if(loading){
    return <p>loading</p>;
  }

  return(
    <BoardListUI
    data = {data}/>
  )
}
export default BoardList;