import styled from '@emotion/styled'

export const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const LoginContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  left:50%;
  top:50%;
  margin-left:-300px;
  margin-top:250px;
  background-color: #939393;
  border-radius: 50px;
`
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 0px 10px;
`
export const Input = styled.input`
  /* display: flex; */
  margin: 100px 30px 10px 0px;
  width: 300px;
  height: 50px;
  font-size: 20px;
`
export const Password = styled.input`
  width: 300px;
  height: 50px;
  margin:0px 60px 20px 0px;
  font-size: 20px;
`
export const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 100px 0px 0px 0px;
  border-radius: 10px;
`
export const Waring = styled.div`
color: red;
font-size:20px;
`