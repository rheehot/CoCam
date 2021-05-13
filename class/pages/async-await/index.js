import axios from 'axios';
import {useState} from 'react';

export default function AsyncAwaitPage(){
  const[createdAt, setCreateAt] = useState('');
  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');

  async function handleClickGetPost(){
    console.log('Plese Get Post');
    const data = await axios.get('https://koreanjson.com/posts/1');
    setTitle(data.data.title);
    setContent(data.data.content);
    setCreateAt(data.data.createdAt.slice(0,10).replace(/-/gi,'.'));
  }

  return(
    <div>
      <button onClick={handleClickGetPost}>
      게시물 가져오기
      </button>
      <div>
      Title :<div>{title}</div>
      Content:<div>{content}</div> 
      create at : <div>{createdAt}</div>
      </div>
    </div>
    
  )
}