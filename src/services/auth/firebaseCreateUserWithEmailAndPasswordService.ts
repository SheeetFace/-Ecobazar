// import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

// import { firebaseInitUserDataService } from "./firebaseInitUserDataService";

// import { FirebaseError } from 'firebase/app';


// export const firebaseCreateUserWithEmailAndPasswordService = async(email:string, password:string, displayName:string)=>{

//     const auth = getAuth();

//     const res = {
//         data:{},
//         error:{
//             status:false,
//             message:''
//         }
//     }

//     try{
//         const credential =  await createUserWithEmailAndPassword(auth, email, password)
//         console.log(credential)

//         const initData = await firebaseInitUserDataService(credential.user, displayName)

//         res.data=initData

//         //!

//     }
//     catch(error){

//         res.error.status=true;

//         if(error instanceof FirebaseError){
//             console.error('Error code:', error.code);
//             res.error.message= error.code
//         }else{
//             console.error('Other error occurred:', error);
//             res.error.message= error as string
//         }  
//     }

//     return res;
// };


import { getAuth, createUserWithEmailAndPassword, linkWithCredential, GoogleAuthProvider,fetchSignInMethodsForEmail } from "firebase/auth";
import { firebaseInitUserDataService } from "./firebaseInitUserDataService";
import { FirebaseError } from 'firebase/app';

export const firebaseCreateUserWithEmailAndPasswordService = async (email: string, password: string, displayName: string) => {
  const auth = getAuth();

  const res = {
    data: {},
    error: {
      status: false,
      message: ''
    }
  }

  try {
    // Создаем аккаунт по электронной почте и паролю
    const credential = await createUserWithEmailAndPassword(auth, email, password)

    // Проверяем, связан ли аккаунт с провайдером Google
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    if (signInMethods.includes("google.com")) {
      // Аккаунт связан с Google, связываем его
      const googleCredential = GoogleAuthProvider.credential(credential.user.providerData[0].uid);
      await linkWithCredential(credential.user, googleCredential);
      console.log("Аккаунты успешно связаны");
    }

    const initData = await firebaseInitUserDataService(credential.user, displayName)
    res.data = initData

  } catch (error) {
    res.error.status = true;

    if (error instanceof FirebaseError) {
      console.error('Код ошибки:', error.code);
      res.error.message = error.code
    } else {
      console.error('Произошла другая ошибка:', error);
      res.error.message = error as string
    }
  }

  return res;
};

