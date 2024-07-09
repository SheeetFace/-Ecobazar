import {getAuth,signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../../firebase/firebaseAuth";

import { firebaseGetUserDataByUid } from "../../db/user/firebaseGetUserDataByUid";

import { firebaseErrorHandlingOperations } from "../../../utils/firebase/firebaseErrorHandlingOperations";

export const firebaseSignInWithEmailAndPasswordService =async (email:string,password:string) => {

    const auth = getAuth(app);

    return firebaseErrorHandlingOperations(async ()=>{
        const credential = await signInWithEmailAndPassword(auth, email, password)

        return await firebaseGetUserDataByUid(credential.user.uid)
    })
}
