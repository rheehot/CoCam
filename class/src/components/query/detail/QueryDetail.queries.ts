import {gql} from '@apollo/client';
export const DETAIL_PROFILE = gql`
query loadingPost($name: String){
  fetchProfile(name: $name){
    number
    name
    age
    school
  }
}
`