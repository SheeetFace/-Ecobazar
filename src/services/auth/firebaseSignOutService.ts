import { getAuth, signOut } from "firebase/auth";

export const firebaseSignOutService= () => {
    const auth = getAuth();

    const res =signOut(auth)
        .then(() =>{
            localStorage.setItem('userData','')
            return {success:true}
        })
        .catch((error) => {
            console.error(error)
            return {success:false} 
        });
    
    return res
    
}

