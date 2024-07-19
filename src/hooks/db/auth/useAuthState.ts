import { useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useAppDispatch } from '../../../store/store';

import { setLoading, setError, updateUserData } from '../../../store/slices/authSlice';
import { clearWishlist } from '../../../store/slices/wishlistSlice';
import { clearCart } from '../../../store/slices/cartSlice';
import { clearOrderHistory } from '../../../store/slices/orderHistorySlice';

import { firebaseGetUserDataByUid } from '../../../services/db/user/firebaseGetUserDataByUid';
import { firebaseCheckUserDataWithRetryService } from '../../../services/db/user/firebaseCheckUserDataWithRetryService';

import { firebaseErrorHandlingOperations } from '../../../utils/firebase/firebaseErrorHandlingOperations';

import type { UserDataType } from '../../../types/userTypes';

export const useAuthState = () => {

  const auth = getAuth();

  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser)=>{
      if(firebaseUser && firebaseUser.uid){
        dispatch(setLoading(true));

        const provider = firebaseUser.providerData[0].providerId
        if(provider) sessionStorage.setItem('provider', provider);

        const res = await firebaseErrorHandlingOperations(async ()=>{
          const userData = await firebaseGetUserDataByUid(firebaseUser.uid);

          if(userData) return userData;
          else return await firebaseCheckUserDataWithRetryService(firebaseUser);
        })

        if(res.error.status){
          console.error('Error during retrieving user data:', res.error.message);
          dispatch(setError(res.error.message));
        }else{
          dispatch(updateUserData(res.data as UserDataType));
          dispatch(setError(null));
        }

        dispatch(setLoading(false))
      }else{
        dispatch(updateUserData(null))
        dispatch(clearWishlist())
        dispatch(clearCart())               
        dispatch(setLoading(false))
        dispatch(clearOrderHistory())
      }
    })

    return () => unsubscribe();
  }, [dispatch]);
};