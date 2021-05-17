import{BOARD_INFO} from './BoardInfo.queries';
import{useRouter} from "next/router";
import{useQuery, gql} from "@apollo/client";
import BoardInfoUI from './BoardInfo.presenter';

export default function ProfileInformation(){
  const router = useRouter();

  const postLoadGql = BOARD_INFO;

  
    const{data,loading,error} = useQuery(postLoadGql, {
      variables: {boardId: router.query.id}
    })
    
    if(loading)
    return <p>loading</p>


  return (
    <BoardInfoUI
    data ={data}
    />
  )
}