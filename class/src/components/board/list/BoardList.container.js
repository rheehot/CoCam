import BoardListUI from './BoardList.presenter';
import {BOARD_LIST} from './BoardList.queries';
import{useQuery} from "@apollo/client";



const BoardList = () => {
  const getBoardData = BOARD_LIST;

  const UnSelect = () =>{
    const checkboxes = document.getElementsByName('selected');
    for(let i = 0 ; i < checkboxes.length ; i++){
        checkboxes[i].checked = false;
    }
  }
  
  const{data, loading, error} = useQuery(getBoardData)
  console.log(data);
  if(loading){
    return <p>loading</p>;
  }

  return(
    <BoardListUI
    data = {data}
    UnSelect = {UnSelect}/>
  )
}

export default BoardList;