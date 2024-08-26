//eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { UseQuery } from '@reduxjs/toolkit/query/react';

import type { BaseQueryFn, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import type { QueryDefinition, FetchArgs } from "@reduxjs/toolkit/query";

export type QueryHook<T> =(arg?: void, options?: { skip: boolean })=>UseQuery<
  QueryDefinition<
    void,
    BaseQueryFn<string|FetchArgs, unknown, FetchBaseQueryError, Record<string, unknown>, FetchBaseQueryMeta>,
    never,
    T,
    "api"
  >
>

