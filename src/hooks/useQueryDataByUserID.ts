import { useEffect, useCallback, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useLoadingAndError } from "./useLoadingAndError"

import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import type { Status } from "../types/statusTypes";


type Selector<R> = (state:RootState)=>R;

type Dispatch<A> =  ActionCreatorWithPayload<A,string>;

type ServiceFn<Q> = (userID:string) =>ServiceFnReturn<Q>;

type ServiceFnReturn<Q> = Promise<{data:Q, error:ServiceFnError}>;
type ServiceFnError={
    status:boolean
    message:string
}

type QueryReturn<Q>={
    queryData: Q
    renderLoaderOrError: ()=>JSX.Element|null
}

export const useQueryDataByUserID = <Q,>(
    statusSelector:Selector<Status>,
    dataSelector:Selector<Q>,
    serviceFn:ServiceFn<Q>,
    statusDispatch:Dispatch<Status>,
    writeDispatch:Dispatch<Q>
):QueryReturn<Q>=>{

    const dispatch = useAppDispatch()

    const userID = useAppSelector((state) => state.auth.user?.uid)
    const status = useAppSelector(statusSelector)
    const queryData = useAppSelector(dataSelector)

    const { executeAsync, renderLoaderOrError } = useLoadingAndError<Q>();

    const fetchDataRef = useRef<(()=>Promise<void>)|null>(null);

    fetchDataRef.current = useCallback( async()=>{
        if(status==='idle' && userID){
            const res = await executeAsync(() => serviceFn(userID));

            if(res !== null){
                dispatch(statusDispatch('loaded'))
                dispatch(writeDispatch(res))
            }else{
                dispatch(statusDispatch('error'))
            }
        }
    },[userID,executeAsync,dispatch,statusDispatch,writeDispatch,serviceFn,status])

    useEffect(()=>{
        if(fetchDataRef.current) fetchDataRef.current();
    },[])

    return { queryData, renderLoaderOrError }
}