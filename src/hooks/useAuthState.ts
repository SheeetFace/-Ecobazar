// useAuthState.js
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import type { UserDataType } from '../types/userTypes';


export const useAuthState = () => {
  const [user, setUser] = useState<UserDataType|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const userDataFromStorage = localStorage.getItem('userData');

    const unsubscribe = onAuthStateChanged(auth, (user) => {

        if(user){
            if(!userDataFromStorage){
                const userData:UserDataType = {
                    displayName: user?.displayName || '',
                    email: user?.email || '',
                    photoURL: user?.photoURL || '',
                    uid: user?.uid || '',
                    
                    firstName:'',
                    lastName:'',
                    userType:'Customer',
                    phone:'',
                    address:'',
                    country:'',
                    region:'',
                    zipCode:'',
                    company:''
                }
                localStorage.setItem('userData',JSON.stringify(userData));
                setUser(userData);
            }else{
                setUser(JSON.parse(userDataFromStorage));
            }
        }else{
            localStorage.setItem('userData','');
        }

        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading};
};