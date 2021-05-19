import {gql} from '@apollo/client';
export const BOARD_LIST = gql`
query getBoard{
  fetchBoards{
    number
    writer
    title
    createdAt
  }
}
`