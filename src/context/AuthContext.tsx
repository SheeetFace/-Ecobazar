import { createContext, useState, useMemo } from 'react';

import { firebaseSignOutService } from '../services/auth/firebaseSignOutService';

import { useAuthState } from '../hooks/useAuthState';

import type { ReactNode } from 'react';
import type { UserDataType } from '../types/userTypes';

interface AuthContextType{
    user: UserDataType|null
    loading: boolean
    error: string|null
    updateUserData: (newUserData:UserDataType) =>void
    logout: ()=>Promise<boolean>
    clearError: () =>void
    isUserCustomer1:boolean
}
  
export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    error: null,
    updateUserData: () =>{},
    logout: ()=>Promise.resolve(false),
    clearError: () =>{},
    isUserCustomer1:true
})
  
export const AuthProvider: React.FC<{children:ReactNode}> =({children})=>{

    const [user, setUser] = useState<UserDataType|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);

    useAuthState({setUser, setLoading, setError});

    const isUserCustomer1 = useMemo(() => user?.accountSettings.displayName === 'customer1' ? true : false, [user]);

    const updateUserData = (newUserData:UserDataType)=>{
        setUser(newUserData)
    }

    const logout = async ()=>{ 
        setLoading(true)

        const res = await firebaseSignOutService()

        if(!res.error.status && !res.error.message){
            setUser(null)
            setError(null)
            setLoading(false)

            return true
        }else{
            setError(res.error.message)
            setLoading(false)

            return false
        }
    }

    const clearError = ()=>{ setError(null) }

    return(
        <AuthContext.Provider value={{ user,updateUserData, loading, error, logout, clearError,isUserCustomer1 }}>
            <div style={{backgroundColor:'#191919'}}>{children}</div>  
        </AuthContext.Provider>
    )
    //there's a “,” at the bottom, I can't find it, so I thought I'd hide it and paint over it. very annoying
};