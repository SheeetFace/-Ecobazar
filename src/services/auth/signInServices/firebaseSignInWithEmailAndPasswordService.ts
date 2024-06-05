import {getAuth,signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../../firebase/firebaseAuth";

export const firebaseSignInWithEmailAndPasswordService =async (email:string,password:string) => {

    const auth = getAuth(app);
    console.log(auth.currentUser)

    try{
        const credential = await signInWithEmailAndPassword(auth, email, password)

        return credential.user;

    }catch(error){
        console.error('Error during sign in with email and password:', error);
        throw error;
    }
}
