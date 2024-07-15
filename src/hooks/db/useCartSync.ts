import { useEffect, useCallback, useRef } from 'react';

import { useAppSelector } from '../../store/store';

import { selectCartItemsArray } from '../../store/slices/cartSlice';

import { firebaseUpdateCartService } from '../../services/db/cart/firebaseUpdateCartService';

import debounce from 'lodash.debounce';

export const useCartSync = () => {
  const cartItems = useAppSelector(selectCartItemsArray);
  const userID = useAppSelector((state) => state.auth.user?.uid);

  const isFirstRender = useRef(true);
  const prevCartItemsJSON = useRef('');

  const debouncedSyncCart = useCallback(
    debounce(async (items, userID)=>{
        if(userID){
            try{
                await firebaseUpdateCartService(userID, items);
            }catch(error){
                console.error('Failed to sync cart with Firebase:', error);
            }
        }
    }, 800),[])

  useEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false;
      prevCartItemsJSON.current = JSON.stringify(cartItems);

      return
    }

    const currentCartItemsJSON = JSON.stringify(cartItems);

    if(currentCartItemsJSON !== prevCartItemsJSON.current){
      debouncedSyncCart(cartItems, userID);
      prevCartItemsJSON.current = currentCartItemsJSON;
    }

    return ()=>{ debouncedSyncCart.cancel()}

  },[cartItems, userID, debouncedSyncCart])
}