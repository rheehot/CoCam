import{Wrapper, ProfileHeader, GuestImgContentContainer, GuestImgContainer, GuestContentContainer, GuestImg, HeaderNamePlace, HeaderNamePlace_Name, HeaderNamePlace_Date, AddFunctionalImgContainer, AddFunctionalImg, AddFunctionalImg2, BodyContentContainer, BodyTitle, BodyImg, BodyContent, BodyYoutubeContainer, BodyYoutube, TumbUpContainer, TumbUpContent} from './BoardInfo.styles';
const BoardInfoUI = ({data}) =>{
  return(
    <Wrapper>
    <ProfileHeader>
      <HeaderNamePlace>
        <GuestImgContentContainer>
          <GuestImgContainer>
            <GuestImg src='/guest.png'></GuestImg>
          </GuestImgContainer>
          <GuestContentContainer>
            <HeaderNamePlace_Name>{data?.fetchBoard.writer}</HeaderNamePlace_Name>
            <HeaderNamePlace_Date>Date: 2021.02.18</HeaderNamePlace_Date>
          </GuestContentContainer>
        </GuestImgContentContainer>
      </HeaderNamePlace>
      <AddFunctionalImgContainer>
        <AddFunctionalImg src='/addfile.png'></AddFunctionalImg>
        <AddFunctionalImg2 src='/location.png'></AddFunctionalImg2>
      </AddFunctionalImgContainer>
    </ProfileHeader>

    <BodyContentContainer>
      <BodyTitle>{data?.fetchBoard.title}</BodyTitle>
      <BodyImg></BodyImg>
      <BodyContent>{data?.fetchBoard.contents}</BodyContent>
      <BodyYoutubeContainer>
        <BodyYoutube></BodyYoutube>
      </BodyYoutubeContainer>
      <TumbUpContainer>
        <TumbUpContent>
          <img src="/thumb_up.png"></img>
          <img src="/thumb_down.png"></img>
        </TumbUpContent>
      </TumbUpContainer>
    </BodyContentContainer>
  </Wrapper>
  )
}
export default BoardInfoUI;