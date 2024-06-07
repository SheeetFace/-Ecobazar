import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { firebaseGetUserDataByUid } from '../services/db/firebaseGetUserDataByUid';

import { firebaseErrorHandlingOperations } from '../utils/firebase/firebaseErrorHandlingOperations';

import type { UserDataType } from '../types/userTypes';


export const useAuthState = () => {
    const [user, setUser] = useState<UserDataType|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const auth = getAuth();

        const unsubscribe =  onAuthStateChanged(auth, async (user) => {

            if(user && user.uid){
                const res = await firebaseErrorHandlingOperations(async ()=>{
                    return await firebaseGetUserDataByUid(user.uid);
                });

                if(res.error.status){
                    console.error('Error during retrieving user data:', res.error.message);
                    setError(res.error.message);
                }else{
                    setUser(res.data as UserDataType);
                    setError(null);
                }

                setLoading(false); 
            }

            setLoading(false);
        });

        return () => unsubscribe();
    },[]);

    return { user, loading, error};
};