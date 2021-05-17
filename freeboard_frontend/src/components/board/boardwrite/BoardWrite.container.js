import{useState} from 'react';
import {useForm} from 'react-hook-form';
import{useMutation} from "@apollo/client";
import DaumPostcode from "react-daum-postcode";
import {useRouter} from 'next/router';
import BoardWriteUI from './BoardWrite.presenter';
import {CREATE_BOARD_CONTENT} from './BoardWrite.queries';


const BoardWrite = () =>{
  const router = useRouter();
  const{handleSubmit, register} = useForm();

  const postContentGql = CREATE_BOARD_CONTENT;

  const [postRequest] = useMutation(postContentGql)

  const[inputs, setInputs] = useState({
    writer:'',
    password: '',
    title: '',
    contents: '',
    
  })

  const [flag, setFlag] = useState(false);

  

  const handleOnChange = (e) =>{
    setInputs({
      ...inputs,
      [e.target.id] : e.target.value
    })
    //const observeState = {[e.tartget.id] : e.target.value}
    console.log(e.target.value);
    if(inputs.writer && inputs.password && inputs.title && inputs.contents){
    setFlag(prev => true)
    }else{
    setFlag(prev => false)
    }
  }

  async function hadleClickOnPost(){
      const result = await postRequest({
        variables:{...inputs}
      });
      console.log('This is Mutation Function');
      router.push(`/board/${result.data.createBoard._id}`);
      

  }

  return(
    <BoardWriteUI
    flag = {flag}
    handleOnChange = {handleOnChange}
    hadleClickOnPost = {hadleClickOnPost}
    />
  )

}
  
export default BoardWrite;