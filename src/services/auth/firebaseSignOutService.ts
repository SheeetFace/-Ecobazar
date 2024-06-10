import { getAuth, signOut } from "firebase/auth";

import { firebaseErrorHandlingOperations } from "../../utils/firebase/firebaseErrorHandlingOperations";

export const firebaseSignOutService= async() => {
    const auth = getAuth();

    return await firebaseErrorHandlingOperations(async ()=>{

        return await signOut(auth);
    })
}

