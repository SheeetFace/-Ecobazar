import { getAuth, signInWithPopup,FacebookAuthProvider, GoogleAuthProvider,} from "firebase/auth"

import { app } from "../../firebase/firebaseAuth"

import { FirebaseError } from 'firebase/app';

type Provider = 'google'|'facebook'|'loginAndPassword'

export const firebaseSignInWithService = async (provider:Provider) => {
    const auth = getAuth(app);

    let providerAuth;

    const res = {
        data:{},
        error:{
            status:false,
            message:''
        }
    }

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
        res.data =credentials.user;

    }catch(error){
        res.error.status=true;

        if(error instanceof FirebaseError) res.error.message= error.code
        else res.error.message= error as string

        console.error('Error during sign in with provider:', error);
    }

    return res;
};
