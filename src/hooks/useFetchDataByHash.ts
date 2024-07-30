import { useEffect, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import type { QueryHook } from "../types/queryHookTypes";

type Query<T> = QueryHook<QueryData<T>>;
type QueryData<T> = { map?: Map<string, T>, list?: T[] };


const isMap = <T,>(data:QueryData<T>): data is { map:Map<string,T> } => {
  return data.map !== undefined && data.map instanceof Map;
}
const isList = <T,>(data:QueryData<T>): data is { list:T[] } => {
  return data.list !== undefined && Array.isArray(data.list);
}


const useFetchDataByHash = <T extends { id:string}> (hash:string, query:Query<T>, redirect:string) => {
  const navigate = useNavigate();
  const { data, isLoading } = query();

  const hashData = useMemo(():T|null=>{
    if(data){
      if(isMap(data)) return data.map.get(hash) as T;
      if(isList(data)) return data.list.find((item) => (item as T).id === hash) as T;
    }
    return null;
  },[data,hash])

  useEffect(()=>{
    if(!isLoading && !hashData) navigate(redirect);
  },[hashData, isLoading, navigate, redirect])

  return {hashData, isLoading};

}

export default useFetchDataByHash;
