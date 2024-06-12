import { useState, useCallback, useRef } from 'react';

import useScrollLock from './useScrollLock';

import Loader from '../components/molecules/Loader/Loader';
import FormValidationMessage from '../components/atoms/form/FormValidationMessage/FormValidationMessage';

interface Status{
    status:boolean
    message:string
}

interface PromiseFunc<T>{
    data: T,
    error:Status
}

type ExecuteAsync<T> = (asyncFunction: ()=>Promise<PromiseFunc<T>>) => Promise<T|null>

interface UseLoadingAndErrorResult<T>{
    isLoading: boolean
    errorMessage: string|null
    executeAsync: ExecuteAsync<T>
    renderLoaderOrError: ()=>JSX.Element|null
}

export const useLoadingAndError=<T,>():UseLoadingAndErrorResult<T>=>{

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const startLoading = useCallback(()=>setIsLoading(true),[]);
    const stopLoading = useCallback(()=>setIsLoading(false),[]);
    const setError = useCallback((message:string|null)=>setErrorMessage(message),[]);

    const ref = useRef<HTMLDivElement|null>(null)
    useScrollLock(isLoading,ref)

    const executeAsync: ExecuteAsync<T> = useCallback(async(asyncFunction)=>{

        startLoading();
        setError(null);

        try{
            const result = await asyncFunction();

            if(result.error.status){
                setError(result.error.message)
                return null
            }
            return result.data;

        }catch(error){
            setError('An unknown error occurred')
            return null
        
        }finally{
            stopLoading()
        }

    },[startLoading,stopLoading,setError])

    const renderLoaderOrError = useCallback(()=>{
        if(isLoading) return <div ref={ref} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, backgroundColor:'#52525291'}}>
                                <Loader size='3rem'/>
                            </div>
        if(errorMessage) 
            return  <div style={{width:'100%',height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FormValidationMessage error={errorMessage}/>
                    </div>

        return null
    },[isLoading, errorMessage]);

    return {executeAsync,renderLoaderOrError,errorMessage,isLoading};
}

