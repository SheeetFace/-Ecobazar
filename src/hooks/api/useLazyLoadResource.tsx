import { useInView } from "react-intersection-observer"

import useApiResource from "../useApiResource"

import type { QueryHook } from "../../types/queryHookTypes"

type TypeResource = 'products'|'blogs'|'latestBlogs';
type ResourceArgs<T> = {
    query:QueryHook<T>,
    typeResource: TypeResource
    threshold?:number,
    triggerOnce?:boolean
}

export const useLazyLoadResource = <T,>({query,typeResource,threshold=0,triggerOnce=true}:ResourceArgs<T>)=>{
    const { ref, inView} = useInView({ threshold, triggerOnce });

    const { responseData, content } = useApiResource<T>(query, typeResource, !inView);

    return { ref, responseData, content };
}