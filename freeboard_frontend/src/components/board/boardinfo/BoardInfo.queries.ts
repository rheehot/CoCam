import {gql} from '@apollo/client';
export const BOARD_INFO = gql`
query loadingPost($boardId: ID!){
  fetchBoard(boardId: $boardId){
    writer
    title
    contents
    _id
  }
}
`
