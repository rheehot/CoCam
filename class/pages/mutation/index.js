import{useMutation, gql} from "@apollo/client";
import{useState} from 'react';

export default function MutationPage(){

  const tester = gql`
  mutation($writer: String, $password: String, $title: String, $contents: String){
    createBoard(
    writer:$writer,
    password:$password,
    title:$title,
    contents:$contents
    ){
      message
    }
  }
  `;

  const [posting] = useMutation(tester)

  const[inputs, setInputs] = useState({
    writer:'',
    password: '',
    title: '',
    contents: '',
  })

  async function hadleClickOnPost(){
    try{
      const result = await posting({
        variables:{...inputs}
      });

      console.log('This is Mutation Function');
      alert(result.data.createBoard.message);

    } catch(errer) {
        alert(error.message);
    } 
    
    
  }

  


  const handlePosting = (e) => {
    setInputs({
      ...inputs, //기존의 input객체 복사
      [e.target.id] : e.target.value
    })
    console.log(inputs)
  }

  return (
    <div>
      작성자: <input type="text" id='writer'onChange={handlePosting}></input>
      비밀번호: <input type="password" id='password' onChange={handlePosting}></input>
      제목: <input type="text" id='title' onChange={handlePosting}></input>
      내용: <input type="text" id='contents' onChange={handlePosting}></input>
      <button onClick={hadleClickOnPost}>Post</button>
    </div>
  )
}