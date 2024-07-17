import type { UseQuery, BaseQueryFn, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import type { QueryDefinition, FetchArgs } from "@reduxjs/toolkit/query";

export type QueryHook<T> =()=>UseQuery<
  QueryDefinition<
    void,
    BaseQueryFn<string|FetchArgs, unknown, FetchBaseQueryError, Record<string, unknown>, FetchBaseQueryMeta>,
    never,
    T,
    "api"
  >
>