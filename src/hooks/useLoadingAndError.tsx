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

    const loadingRef = useRef<HTMLDivElement|null>(null)

    useScrollLock(isLoading,loadingRef)

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

        if(isLoading) 
            return  <div ref={loadingRef}
                         style={{
                            position: 'fixed', 
                            top: 0, 
                            left: 0, 
                            width: '100%', 
                            height: '100%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            zIndex: 20,
                        }}>
                    <div style={{
                        backgroundColor:'rgba(152,245,152,.6)',
                        borderRadius:'100%',
                        width:'7rem',
                        height:'7rem',
                        boxShadow: '0px 0px 85px 85px rgba(152,245,152,.6)',
                        WebkitBoxShadow: '0px 0px 85px 85px rgba(152,245,152,.6)',
                        MozBoxShadow: '0px 0px 85px 85px rgba(152,245,152,.6)',
                    }}>
                        <Loader size='3rem' />
                    </div>
                </div>
                            
        if(errorMessage) 
            return  <div style={{width:'100%',height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FormValidationMessage error={errorMessage}/>
                    </div>

        return null
    },[isLoading, errorMessage]);

    return {executeAsync,renderLoaderOrError,errorMessage,isLoading};
}

