import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { firebaseErrorHandlingOperations } from "../../utils/firebase/firebaseErrorHandlingOperations";

export const firebaseResetPasswordService = async(email:string) => {
    const auth = getAuth();

    return await firebaseErrorHandlingOperations(async ()=>{

       return await sendPasswordResetEmail(auth, email);
    })
}
