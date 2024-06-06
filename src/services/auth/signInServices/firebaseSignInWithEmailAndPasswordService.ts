import {getAuth,signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../../firebase/firebaseAuth";
import { FirebaseError } from 'firebase/app';

export const firebaseSignInWithEmailAndPasswordService =async (email:string,password:string) => {

    const auth = getAuth(app);

    const res = {
        data:{},
        error:{
            status:false,
            message:''
        }
    }

    try{
        const credential = await signInWithEmailAndPassword(auth, email, password)
        res.data =credential.user

    }catch(error){
        res.error.status=true;
        
        if(error instanceof FirebaseError) res.error.message= error.code
        else res.error.message= error as string

        console.error('Error during sign in with email and password:', error);
    }

    return res;
}
