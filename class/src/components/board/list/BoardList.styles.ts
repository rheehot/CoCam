import styled from '@emotion/styled'

export const MiddleContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
max-width:1300px;
width:100%;
height: 700px;
border-top: 1px solid;
`
export const Table_Header = styled.div`
display:flex;
flex-direction: row;
align-items:center;
width:100%;
height:50px;
background-color: #939393;
`
export const Table_Header_Checkbox = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
width: 10%;
`
export const Table_Header_Number = styled.div`
display:flex;
justify-content:center;
text-align:center;
align-items:center;
width: 20%;
`
export const Table_Header_Title = styled.div`
display:flex;
justify-content:center;
text-align:center;
align-items:center;
width: 50%;
`
export const Table_Header_Date = styled.div`
display:flex;
justify-content:center;
text-align:center;
align-items:center;
width: 20%;
`


export const Table_Body = styled.div`
display:flex;
flex-direction: column;
width:100%;
height:500px;
border-bottom: 1px;
`
export const Table_Body_literable = styled.div`
display:flex;
flex-direction: row;
align-items:center;
width:100%;
height: 50px;
border-bottom: 1px solid;
`

export const Table_Body_Checkbox = styled.div`
display:flex;
justify-content:center;
text-align:center;
width: 10%;
`
export const Table_Body_Number = styled.div`
display:flex;
justify-content:center;
text-align:center;
width: 20%;
`
export const Table_Body_Title = styled.div`
display:flex;
justify-content:center;
text-align:center;
width: 50%;
`
export const Table_Body_Date = styled.div`
display:flex;
justify-content:center;
text-align:center;
width: 20%;
`

export const UnSelectButton = styled.button `
width:200px;
height:50px;
border-radius: 30px;
border: none;
color: #ffffff;
background-color : #D84B6F;

`