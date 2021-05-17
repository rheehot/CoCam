import QueryWriteUI from './QueryWrite.presenter';
import{useRouter} from "next/router"
import{useMutation, gql, from} from "@apollo/client"
import {useState} from 'react'
import {CREATE_PROFILE, IMPORTER} from './QueryWrite.queries';
import { printIntrospectionSchema } from 'graphql';

const QueryWrite = () =>{
  const[inputs, setInputs] = useState({
    name: '',
    school: '',
    age: '',
  });
  
  const[age, setAge] = useState();
  const[test, setTest] = useState();
  
  const postProfileGql = CREATE_PROFILE;
  
  const [Profile] = useMutation(postProfileGql)

  const[isTrue, setTrue] = useState(true);
  const [flag, setFlag] = useState(false);


  const handleIsTrue =() =>{
    setTrue(prev => !prev)
    console.log(isTrue)
  }

  

  const handleOnChange = (e) =>{
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    });
    
    let keys = Object.keys(inputs);
    let inputValue = inputs(keys);
    //console.log(inputs);
    if(Object.keys(inputs).values.length> 2){
      setTrue(prev => !prev);
    }
    console.log(inputs);
  }

  

  const router = useRouter();
  
  async function handleOnProFile(){
    console.log('123123')
    try{
      const result = await Profile({
        variables:{
          ...inputs,
          age : Number(inputs.age)
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
      handleOnChange = {handleOnChange}/>
    )
}

export default QueryWrite;