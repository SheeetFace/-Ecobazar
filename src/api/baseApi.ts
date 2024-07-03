import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

type BaseQueryWithFallback = BaseQueryFn<string|FetchArgs, unknown, FetchBaseQueryError>;


const baseUrl = import.meta.env.VITE_APP_BASE_API_URL;
const baseUrlReserve = import.meta.env.VITE_APP_BASE_API_URL_RESERVE;

const switchToBackupAlertLog = '%c The primary server is not responding. Switching to the backup.';
const backupNotResponseAlertLog = '%c The backup server is also not responding.';

const switchToBackupAlertLogStyle = 'color: orange; font-size: 16px; font-weight: bold;';
const backupNotResponseAlertLogStyle = 'color: tomato; font-size: 18px; font-weight: bold;';

const baseQuery = fetchBaseQuery({ baseUrl });
const baseQueryReserve = fetchBaseQuery({ baseUrl: baseUrlReserve });

const baseQueryWithFallback: BaseQueryWithFallback = async(args, api, extraOptions)=>{
  let result;

  try{
    result = await baseQuery(args, api, extraOptions);

    if(result.error && result.error.status === 'FETCH_ERROR'){
      console.log(switchToBackupAlertLog,switchToBackupAlertLogStyle)
      result = await baseQueryReserve(args, api, extraOptions);
    }
  }catch(error){
    console.log(switchToBackupAlertLog,switchToBackupAlertLogStyle)
    result = await baseQueryReserve(args, api, extraOptions);
  }

  if(result.error) console.log(backupNotResponseAlertLog,backupNotResponseAlertLogStyle);
  
  return result;
}

const baseQueryWithRetry = retry(baseQueryWithFallback,{ maxRetries:1});

export const baseApi = createApi({
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({})
});