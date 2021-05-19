import styled from '@emotion/styled'

interface IProps{
  isTrue?: boolean; // 물음표: 있을수도 없을수도 있는 속성.
}

export const RegisterButton = styled.button`
background-color: ${(props: IProps) => props.isTrue === true ? 'blue':'yellow'};
`
 
export const Blue = styled.button`
  background-color:blue;
`

export const Red = styled.button`
  background-color:Red;
`