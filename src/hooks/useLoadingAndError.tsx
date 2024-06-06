import { useState, useCallback } from 'react';

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
    // isLoading: boolean
    // errorMessage: string|null
    executeAsync: ExecuteAsync<T>
    renderLoaderOrError: ()=>JSX.Element|null
}

export const useLoadingAndError=<T,>():UseLoadingAndErrorResult<T>=>{

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const startLoading = useCallback(()=>setIsLoading(true),[]);
    const stopLoading = useCallback(()=>setIsLoading(false),[]);
    const setError = useCallback((message:string|null)=>setErrorMessage(message),[]);

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
        if(isLoading) return<Loader/>;
        if(errorMessage) 
            return  <div style={{width:'100%',height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FormValidationMessage error={errorMessage}/>
                    </div>

        return null
    },[isLoading, errorMessage]);

    return {executeAsync,renderLoaderOrError};
}
