import {useRouter} from 'next/router';
export default function RouterPage(){
  const router = useRouter()
  
  const onClickRouter = () =>{
    //router.replace('/mutation');
    router.push(`/query/Stanly_Marsh/55/${value}`);
  }

  return (
    <div>
      <button onClick={onClickRouter}>게시글 등록 페이지로 이동</button>
    </div>
  )
}