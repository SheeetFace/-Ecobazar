import { FirebaseError } from 'firebase/app';

import { formatAuthError } from './formatAuthError';

type Operation<T> = ()=>Promise<T>

export const firebaseErrorHandlingOperations = async <T>(operation:Operation<T>)=>{

  const res ={
      data:{} as T,
      error:{
        status: false,
        message: ''
      }
  }
  
  try{
    res.data = await operation();

  }catch(error){
    res.error.status = true;

    if(error instanceof FirebaseError) res.error.message = formatAuthError(error.code);
    else if (error instanceof Error) res.error.message = error.message;
    else res.error.message = 'An unexpected error occurred';
  
    console.error('Error during operation:', error);
  }

  return res;
}