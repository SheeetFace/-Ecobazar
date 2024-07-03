import { useCallback, useEffect, useState } from "react";

import FullScreenLoader from "../components/organisms/FullScreenLoader/FullScreenLoader";
import AlertMessage from "../components/molecules/AlertMessage/AlertMessage";
import NothingFound from "../components/atoms/NothingFound/NothingFound";

import { shopProductData } from "../data/temp/shopProductData";

import type { UseQuery, BaseQueryFn, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import type { QueryDefinition, FetchArgs } from "@reduxjs/toolkit/query";

interface UseApiResourceReturn<R>{
  responseData: R|null;
  content: JSX.Element|null;
}

type QueryHook<R> =()=>UseQuery<
  QueryDefinition<
    void,
    BaseQueryFn<string|FetchArgs, unknown, FetchBaseQueryError, Record<string, unknown>, FetchBaseQueryMeta>,
    never,
    R,
    "api"
  >
>

type TypeResource = 'products'|'blogs';

const useApiResource = <R,>(query: QueryHook<R>, typeResource: TypeResource): UseApiResourceReturn<R> => {

    const { data, isLoading, isError, error } = query();

    const [responseData, setResponseData] = useState<R|null>(null);

    const isResponseError = useCallback((type: TypeResource)=>{
        switch(type){
        case "products":
            return shopProductData;
        // case "blogs":
        //   return
        default:
            return null;
        }
    },[typeResource]);

    useEffect(()=>{
        if(data) setResponseData(data);
        else if(isError) setResponseData(isResponseError(typeResource) as R|null);
    },[data, isError, typeResource, isResponseError]);

    let content: JSX.Element|null = null;

    if(isLoading) content = <FullScreenLoader />;
    else if(!isLoading && !isError && Array.isArray(data) && data.length === 0) content = <NothingFound />;
    else if(isError) content = (
                        <AlertMessage
                            type='error'
                            title='FETCH ERROR'
                            isCanClose={true}
                            message={
                            <>
                                <b>
                                    Sorry, but the servers (both ZEABUR and APPWRITE) are temporarily unavailable😤 This may be because it's free. In that case we are accessing locally hosted data.
                                </b>
                                <br />
                                {(error?.data?.message) ?? (error?.error) ?? 'Unknown error'}
                            </>
                            }
                        />
                    );

    return {responseData,content};
}

export default useApiResource;
