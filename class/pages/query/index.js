import{useMutation, gql} from "@apollo/client";
import{useState} from 'react';
import {useRouter} from 'next/router';
export default function ProfilePage(){

const[inputs, setInputs] = useState({
  name: '',
  school: '',
  age: '',
});

const[age, setAge] = useState();
const[test, setTest] = useState();

const postProfileGql = gql`
  mutation testProfile ($name: String, $age: Int, $school: String){
    createProfile(
      name:$name,
      age:$age,
      school:$school
    )
    {
    message
    }
  }
  `;

const [Profile] = useMutation(postProfileGql)

const handleOnChange = (e) =>{
  setInputs({
    ...inputs,
    [e.target.name] : e.target.value
  });
  console.log(inputs);
}

const handleOnAge = (e) =>{
  const age = e.target.value;
  const ageChage = Number(age);
  setAge(ageChage);
}
const router = useRouter();

async function handleOnProFile(){
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
    <div>
      <span>이름 : </span><input type="text" name = 'name' onChange={handleOnChange}></input>
      <span>나이 : </span><input type="number" name = 'age' onChange={handleOnChange}></input>
      <span>학교 : </span><input type="text" name = 'school' onChange={handleOnChange}></input>
      <button onClick={handleOnProFile}>프로필 등록하기</button>
    </div>
  )
}