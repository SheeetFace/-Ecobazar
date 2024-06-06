import {getAuth,signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../../firebase/firebaseAuth";

import { firebaseAuthOperations } from "../../../utils/firebase/firebaseAuthOperations";

export const firebaseSignInWithEmailAndPasswordService =async (email:string,password:string) => {

    const auth = getAuth(app);

    return firebaseAuthOperations(async ()=>{
        const credential = await signInWithEmailAndPassword(auth, email, password)
        return credential.user
    })
}
