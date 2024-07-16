import { useEffect, useCallback, useRef, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../store/store';

import { setCartItems } from '../../../store/slices/cartSlice';
import { selectCartItemsArray } from '../../../store/slices/cartSlice';

import { firebaseUpdateCartService } from '../../../services/db/cart/firebaseUpdateCartService';
import { firebaseGetCartService } from '../../../services/db/cart/firebaseGetCartService';

import debounce from 'lodash.debounce';

export const useCartSync = () => {

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(selectCartItemsArray);
  const userID = useAppSelector((state) => state.auth.user?.uid);
  const isUserLoading = useAppSelector((state) => state.auth.loading);

  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const prevUserID = useRef<string|null>(null);
  const prevCartItemsJSON = useRef('');

  const debouncedSyncCart = useCallback(
    debounce( async(items,id)=>{
      if(id){
        try{
          await firebaseUpdateCartService(id, items);
        }catch(error){
          console.error('Failed to sync cart with Firebase:', error);
        }
      }
    },800),[]);

  useEffect(() => {
    const fetchCartItems = async()=>{
      if(userID){
        try{
          const cartData = await firebaseGetCartService(userID);
          dispatch(setCartItems(cartData));
          prevCartItemsJSON.current = JSON.stringify(cartData);
        }catch(error){
          console.error('Failed to fetch cart items:', error);
        }
      }
    }

    if(!isUserLoading){
      if(userID !== prevUserID.current && userID){ // user has changed (logged in or out)
        prevUserID.current = userID;

        if(userID) fetchCartItems();
        else prevCartItemsJSON.current = '[]'; // and dispatch(setCartItems([])) ?
          
      }else if(!isInitialized && userID){ // first render with a logged-in user
        fetchCartItems();
      }

      setIsInitialized(true);
    }
  },[userID, isUserLoading, dispatch]);

  useEffect(()=>{
    if(isInitialized && !isUserLoading && userID){
      const currentCartItemsJSON = JSON.stringify(cartItems);

      if(currentCartItemsJSON !== prevCartItemsJSON.current){
        debouncedSyncCart(cartItems, userID);
        prevCartItemsJSON.current = currentCartItemsJSON;
      }
    }

    return () => { debouncedSyncCart.cancel() };
    
  },[cartItems, userID, debouncedSyncCart, isUserLoading, isInitialized])
}