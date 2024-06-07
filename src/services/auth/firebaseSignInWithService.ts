import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth"

import { app } from "../../firebase/firebaseAuth"

import { firebaseAuthOperations } from "../../utils/firebase/firebaseAuthOperations";

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


    return firebaseAuthOperations(async ()=>{
        const credentials = await signInWithPopup(auth, providerAuth);
        return credentials.user;
    });
};
