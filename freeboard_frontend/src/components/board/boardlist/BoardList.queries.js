import {gql} from '@apollo/client';

export const BOARD_LIST = gql`
query{
  fetchBoards{
    _id
    writer
    title
    createdAt
  }
}
`