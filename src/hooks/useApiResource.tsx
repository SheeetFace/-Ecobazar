import { useCallback } from "react";

import FullScreenLoader from "../components/organisms/FullScreenLoader/FullScreenLoader";
import AlertMessage from "../components/molecules/AlertMessage/AlertMessage";
import NotingFound from "../components/atoms/NothingFound/NothingFound";

import { shopProductData } from "../data/temp/shopProductData";

import type { UseQuery,BaseQueryFn, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import type { QueryDefinition,FetchArgs } from "@reduxjs/toolkit/query";


interface UseApiResourceReturn<R> {
    responseData: R
    content: JSX.Element | null
}

type QueryHook<R> = () => UseQuery<
    QueryDefinition<
        void,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, Record<string, unknown>, FetchBaseQueryMeta>,
        never,
        R,
        "api"
    >
>

type TypeResource = 'products'|'blogs'


const useApiResource = <R,> (query: QueryHook<R>,typeResource:TypeResource): UseApiResourceReturn<R> => {
    const { data, isLoading, isError,error } = query();
    
    let content = null;

    if (isLoading ) content = <FullScreenLoader />;
    if (!isLoading && !isError && Array.isArray(data) && data.length === 0) content = <NotingFound />;
    if (isError) content = <AlertMessage type='error'
                                         title='FETCH ERROR'
                                         isCanClose={true}
                                         message={
                                            <>
                                                <b>
                                                 Sorry, but the data server is temporarily unavailable😤 This may be due to the fact that it is free. In such a case, we refer to the locally hosted data.
                                                </b>
                                                <br/>
                                                {error.data.message}
                                            </>
                                         }    
                            /> 

    const isResponseError =useCallback((type:TypeResource)=>{

        switch(type){
            case "products":
                return shopProductData
            // case "blogs":
            //     return
        }

    },[query,typeResource])

    return  { 
                responseData:isError ? isResponseError(typeResource):data,
                content
            }
};

export default useApiResource;
