import { getAuth, signInWithPopup } from "firebase/auth"
import { app, googleAuthProvider } from "../../firebase/firebaseAuth"


export const firebaseAuthService = async () => {
    const auth = getAuth(app);

    const credentials = await signInWithPopup(auth, googleAuthProvider);
    return credentials.user;
    //!CHANGE

};
