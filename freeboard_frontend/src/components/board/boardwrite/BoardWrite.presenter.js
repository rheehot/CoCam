import {Wrapper, Title, WriterWrapper, Label, Writer, Password, InputWrapper, Subject, Contents, ZipcodeWrapper, Zipcode, SearchButton, Address, Youtube, ImageWrapper, UploadButton, OptionWrapper, RadioButton, RadioLabel, CancelButton, SubmitButton, SubmitButton_false, ButtonWrapper} from './BoardWrite.styles';
import {useForm} from 'react-hook-form';

const BoardWriteUI = ({handleOnChange, hadleClickOnPost, flag}) =>{
  const{handleSubmit, register} = useForm();
  const onFormSubmit  = data => console.log(data);
  const onErrors = errors => console.error(errors);
  return(
    // <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
    <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer id='writer' name = "writer" type="text"  placeholder="이름을 적어주세요."  onChange = {handleOnChange}/>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password id='password' name ="password"  type="password" placeholder="비밀번호를 입력해주세요."  onChange = {handleOnChange}/>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject id='title' type="text" placeholder="제목을 작성해주세요."onChange = {handleOnChange}/>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents id='contents' placeholder="내용을 작성해주세요."onChange = {handleOnChange}/> 
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
          {flag? <SubmitButton onClick={hadleClickOnPost} disabled={false}>등록하기</SubmitButton> : <SubmitButton_false onClick={hadleClickOnPost} disabled={true}>등록하기</SubmitButton_false>}
        </ButtonWrapper>
    </Wrapper>
    // </form>
  )
}

export default BoardWriteUI