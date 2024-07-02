import FullScreenLoader from "../components/organisms/FullScreenLoader/FullScreenLoader";
import AlertMessage from "../components/molecules/AlertMessage/AlertMessage";
import NotingFound from "../components/atoms/NothingFound/NothingFound";

import type { UseQuery,BaseQueryFn, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import type { QueryDefinition,FetchArgs } from "@reduxjs/toolkit/query";

interface UseApiResourceReturn<R> {
    data: R
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


const useApiResource = <R,> (query: QueryHook<R>): UseApiResourceReturn<R> => {
    const { data, isLoading, isError,isFetching } = query();

    console.log(`isLoading ${isLoading}`)
    console.log(`isFetching ${isFetching}`)
    console.log(`isError ${isError}`)

    let content = null;

    if (isLoading || isFetching) content = <FullScreenLoader />;
    if (!isLoading && !isFetching&& !isError && Array.isArray(data) && data.length === 0) content = <NotingFound />;
    if (isError) content = <AlertMessage type='error' message='DATA FETCH IS ERROR' title='FETCH ERROR' isCanClose={false} />; 

    return { data, content }
};

export default useApiResource;

