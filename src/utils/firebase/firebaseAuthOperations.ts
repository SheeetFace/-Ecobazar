import { FirebaseError } from 'firebase/app';

type Operation<T> = ()=>Promise<T>

export const firebaseAuthOperations = async <T>(operation:Operation<T>)=>{

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

    if(error instanceof FirebaseError) res.error.message = error.code;
    else res.error.message = error as string;
    
    console.error('Error during operation:', error);
  }

  return res;
}