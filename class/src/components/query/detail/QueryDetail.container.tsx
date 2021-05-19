import QueryDetailUI from './QueryDetail.presenter';
import{useQuery} from "@apollo/client";
import{useState} from 'react';
import {useRouter} from 'next/router';
import {DETAIL_PROFILE} from './QueryDetail.queries';
import { IQuery } from '../../../commons/types/generated/types';

interface IFetchProfile{
  data:{
    fetchProfile: {
      number: number
      name: string
      age: number
      school: string
    }
  }
  
}


const QueryDetail = () => {
    const router = useRouter()

    const postLoadGql = DETAIL_PROFILE;
    const {data,loading,error} = useQuery<IQuery['fetchProfile']>(postLoadGql, {//setState...
      variables: {name: router.query.name}
      })
      console.log('data', data)
      if(loading)
      return <p>loading</p>

      return(
       <QueryDetailUI data={data}
       />
      )
    }
    
    export default QueryDetail;