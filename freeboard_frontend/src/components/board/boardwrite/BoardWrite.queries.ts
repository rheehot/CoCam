import {gql} from '@apollo/client';

export const CREATE_BOARD_CONTENT = gql`
mutation aaa ($writer: String, $password: String, $title: String!, $contents: String!){
  createBoard(createBoardInput: {
    writer:$writer
    password:$password
    title:$title
    contents:$contents
  })
  {
  _id
  }
}
`