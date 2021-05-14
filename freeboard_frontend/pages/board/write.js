import {Wrapper, Title, WriterWrapper, Label, Writer, Password, InputWrapper, Subject, Contents, ZipcodeWrapper, Zipcode, SearchButton, Address, Youtube, ImageWrapper, UploadButton, OptionWrapper, RadioButton, RadioLabel, CancelButton, SubmitButton, ButtonWrapper} from '../../styles/Board.write'
import{useState} from 'react';
import {useForm} from 'react-hook-form';
import{useMutation, gql} from "@apollo/client";
import DaumPostcode from "react-daum-postcode";

export default function BoardWritePage() {
  const{handleSubmit, register} = useForm();

  const postContentGql = gql`
  mutation aaa ($writer: String, $password: String, $title: String!, $contents: String!){
    createBoard(createBoardInput: {
      writer:$writer
      password:$password
      title:$title
      contents:$contents
    })
    {
     writer,contents 
    }
  }
  `;
  const [postRequest] = useMutation(postContentGql)

  const[inputs, setInputs] = useState({
    writer:'',
    password: '',
    title: '',
    contents: '',
  })


  const handleOnChange = (e) =>{
    setInputs({
      ...inputs,
      [e.target.id] : e.target.value
    })
    console.log(e.target.value);
  }

  async function hadleClickOnPost(){
      const result = await postRequest({
        variables:{...inputs}
      });
      console.log('This is Mutation Function');
      alert(result.data.createBoard.message);
  }

  return (
    <form onSubmit={handleSubmit()}>
    <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer id='writer' type="text" placeholder="이름을 적어주세요." {...register("nameRequire", { required: true })} onChange = {handleOnChange}/>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password id='password' type="password" placeholder="비밀번호를 입력해주세요." {...register("passwordRequire", { required: true })} onChange = {handleOnChange}/>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject id='title' type="text" placeholder="제목을 작성해주세요." {...register("titleRequire", { required: true })} onChange = {handleOnChange}/>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents id='contents' placeholder="내용을 작성해주세요." {...register("contentRequire", { required: true })} onChange = {handleOnChange}/>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250"/>
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address />
          <Address />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요."/>
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton>
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button"/>
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <CancelButton>취소하기</CancelButton>
          <SubmitButton type='submit' onClick={hadleClickOnPost}>등록하기</SubmitButton>
        </ButtonWrapper>
    </Wrapper>
    </form>
  )
}
