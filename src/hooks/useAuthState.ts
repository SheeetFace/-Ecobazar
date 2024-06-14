import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { firebaseGetUserDataByUid } from '../services/db/firebaseGetUserDataByUid';
import { firebaseCheckUserDataWithRetryService } from '../services/db/firebaseCheckUserDataWithRetryService';

import { firebaseErrorHandlingOperations } from '../utils/firebase/firebaseErrorHandlingOperations';

import type { UserDataType } from '../types/userTypes';


type SetUser = (user:UserDataType|null)=>void
type SetLoading =(loading:boolean)=>void
type setError = (error:string|null)=>void

interface UseAuthStateParameters{
    setUser:SetUser
    setLoading:SetLoading
    setError:setError
}

type UseAuthState = (params:UseAuthStateParameters)=>void;

export const useAuthState: UseAuthState = ({ setUser, setLoading, setError }) => {
  useEffect(() => {

    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser)=>{
      if(firebaseUser && firebaseUser.uid){
        setLoading(true);

        const provider = firebaseUser.providerData[0].providerId
        if(provider) sessionStorage.setItem('provider', provider);

        const res = await firebaseErrorHandlingOperations(async ()=>{
          const userData = await firebaseGetUserDataByUid(firebaseUser.uid);

          if(userData) return userData;
          else return await firebaseCheckUserDataWithRetryService(firebaseUser);
        })

        if(res.error.status){
          console.error('Error during retrieving user data:', res.error.message);
          setError(res.error.message);
        }else{
          setUser(res.data as UserDataType);
          setError(null);
        }

        setLoading(false)
      }else{
        setUser(null)
        setLoading(false)
      }
    })

    return () => unsubscribe();
  }, [setUser, setLoading, setError]);
};