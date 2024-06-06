import { getAuth, signInWithPopup,FacebookAuthProvider, GoogleAuthProvider,} from "firebase/auth"

import { app } from "../../firebase/firebaseAuth"

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

    try{
        const credentials = await signInWithPopup(auth, providerAuth);
        return credentials.user;

    }catch(error){
        console.error('Error during sign in:', error);
        throw error;
    }
};
