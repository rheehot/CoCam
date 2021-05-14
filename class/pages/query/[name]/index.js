import{useRouter} from "next/router"
import{useQuery, gql} from "@apollo/client"

export default function QueryDetailPage() {
    const router = useRouter()

    const postLoadGql = gql`
    query loadingPost($name: String){
      fetchProfile(name: $name){
        number
        name
        age
        school
      }
    }
    `

    
    // if(loading)
    // return <p>loading</p>
    
  return(
    <div>
      <div>
        이름 : {data && data.fetchProfile.name}
      </div>
      <div>
        나이 : {data && data.fetchProfile.age}
      </div>
      <div>
        학교 : {!data ? data.fetchProfile.shool : ''}
      </div>
    </div>
  )
}