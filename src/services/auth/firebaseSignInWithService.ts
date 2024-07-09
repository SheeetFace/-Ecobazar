import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth"

import { app } from "../../firebase/firebaseAuth"

import { firebaseCheckIsUserAlreadyExistsService } from "../db/user/firebaseCheckIsUserAlreadyExistsService";

import { firebaseErrorHandlingOperations } from "../../utils/firebase/firebaseErrorHandlingOperations";

import type { AuthProvider } from "../../types/auth/authProviderTypes";

export const firebaseSignInWithService = async (provider:AuthProvider) => {
    const auth = getAuth(app);

    let providerAuth;

    switch (provider){
        case 'google':
            providerAuth =new GoogleAuthProvider()
            break
        case 'github':
            providerAuth =new GithubAuthProvider()
            break
        default:
            providerAuth =new GoogleAuthProvider()
    }


    return firebaseErrorHandlingOperations(async ()=>{
        const credentials = await signInWithPopup(auth, providerAuth);

        return await firebaseCheckIsUserAlreadyExistsService(credentials.user,(credentials.user.displayName || ''))
    });
};
