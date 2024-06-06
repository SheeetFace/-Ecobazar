import { getAuth, signInWithPopup,FacebookAuthProvider, GoogleAuthProvider,} from "firebase/auth"

import { app } from "../../firebase/firebaseAuth"

import { firebaseAuthOperations } from "../../utils/firebase/firebaseAuthOperations";

type Provider = 'google'|'facebook'|'loginAndPassword'

export const firebaseSignInWithService = async (provider:Provider) => {
    const auth = getAuth(app);

    let providerAuth;


    switch (provider){
        case 'google':
            providerAuth =new GoogleAuthProvider()
            break
        
        case 'facebook':
            providerAuth =new FacebookAuthProvider()
            break

        default:
            providerAuth =new GoogleAuthProvider()
    }


    return firebaseAuthOperations(async ()=>{
        const credentials = await signInWithPopup(auth, providerAuth);
        return credentials.user;
    });
};
