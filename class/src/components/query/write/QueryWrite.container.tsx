import QueryWriteUI from './QueryWrite.presenter';
import{useRouter} from "next/router"
import{useMutation, gql, from} from "@apollo/client"
import {useState} from 'react'
import {CREATE_PROFILE, IMPORTER} from './QueryWrite.queries';
import { printIntrospectionSchema } from 'graphql';
import { IMutation, IMutationCreateProfileArgs } from '../../../commons/types/generated/types';

const QueryWrite = () =>{
  const[inputs, setInputs] = useState({
    name: '',
    school: '',
    age: '',
  });
  
  const[age, setAge] = useState();
  const[test, setTest] = useState();


  const postProfileGql = CREATE_PROFILE;
  
  const [Profile] = useMutation<IMutation, IMutationCreateProfileArgs>(postProfileGql)

  const[isTrue, setTrue] = useState(true);
  const [flag, setFlag] = useState(false);


  const handleIsTrue =() =>{
    setTrue(prev => !prev)
    console.log(isTrue)
  }  

  const router = useRouter();
  
  async function handleOnProFile(){
    try{
      const result = await Profile({
        variables:{
          ...inputs,
          age : Number(inputs.age),
        }
      });
      alert(result.data.createProfile.message);
      router.push(`/query/${inputs.name}`);
    } catch(error){
      console.log(error.message);
    }
    
  }
    return(
      <QueryWriteUI
      isTrue={isTrue}
      handleIsTrue={handleIsTrue}
      handleOnProFile = {handleOnProFile}
      />
    )
}

export default QueryWrite;