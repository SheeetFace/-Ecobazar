import { createContext, useState, ReactNode } from 'react';

import { firebaseSignOutService } from '../services/auth/firebaseSignOutService';

import { useAuthState } from '../hooks/useAuthState';


import type { UserDataType } from '../types/userTypes';

interface AuthContextType{
    user: UserDataType|null
    loading: boolean
    error: string|null
    logout: ()=>Promise<boolean>
}
  
export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    error: null,
    logout: ()=>Promise.resolve(false)
})
  
export const AuthProvider: React.FC<{children:ReactNode}> =({children})=>{

    const [user, setUser] = useState<UserDataType|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);

    useAuthState({setUser, setLoading, setError});

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

    return(
        <AuthContext.Provider value={{ user, loading, error, logout }}>
            {children}
        </AuthContext.Provider>
    )
};