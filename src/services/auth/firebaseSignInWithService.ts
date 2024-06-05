import { getAuth, signInWithPopup,FacebookAuthProvider, GoogleAuthProvider,signInWithEmailAndPassword,fetchSignInMethodsForEmail,EmailAuthProvider } from "firebase/auth"

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


// export const firebaseSignInWithService = async (provider:Provider) => {
//     const auth = getAuth(app);

//     let providerAuth;

//     switch (provider){
//         case 'google':
//             providerAuth =new GoogleAuthProvider()
//             break
        
//         case 'facebook':
//             providerAuth =new FacebookAuthProvider()
//             break

//         default:
//             providerAuth =new GoogleAuthProvider()
//     }

//     try{
//         const credentials = await signInWithPopup(auth, providerAuth);

//         // const email = credentials.user.email;
        
//         // if (email) {
//         //     console.log("User email:", email);
//         //     const signInMethods = await fetchSignInMethodsForEmail(auth, email);
//         //     console.log("Sign-in methods fetched:", signInMethods);
//         //     if (signInMethods.length > 0) {
//         //         console.log("Account exists with the following sign-in methods:", signInMethods);
//         //     } else {
//         //         console.log("Account NOT exists with the following sign-in methods:", signInMethods);
//         //     }
//         // } else {
//         //     console.log("Email is null or undefined.");
//         // }

//         return credentials.user;

//     }catch(error){
//         console.error('Error during sign in:', error);
//         throw error;
//     }
// };
