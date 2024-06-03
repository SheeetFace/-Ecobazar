import { getAuth, signInWithPopup } from "firebase/auth"
import { app, googleAuthProvider } from "../../firebase/firebaseAuth"


type Provider = 'google'

export const firebaseSignInWithService = async (provider:Provider) => {
    const auth = getAuth(app);

    let providerAuth;

    switch (provider){
        case 'google':
            providerAuth =googleAuthProvider
            break
        
        default:
            providerAuth =googleAuthProvider //!
    }

    try{
        const credentials = await signInWithPopup(auth, providerAuth);
        return credentials.user;

    }catch(error){
        console.error('Error during sign in:', error);
        throw error;
    }
};
