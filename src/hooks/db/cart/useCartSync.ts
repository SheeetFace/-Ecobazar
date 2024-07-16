import { useEffect, useCallback, useRef, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../store/store';

import { setCartItems } from '../../../store/slices/cartSlice';
import { selectCartItemsArray } from '../../../store/slices/cartSlice';

import { firebaseUpdateCartService } from '../../../services/db/cart/firebaseUpdateCartService';
import { firebaseGetCartService } from '../../../services/db/cart/firebaseGetCartService';

import debounce from 'lodash.debounce';

// export const useCartSync = () => {

//   const cartItems = useAppSelector(selectCartItemsArray);
//   const userID = useAppSelector((state) => state.auth?.user?.uid);

//   const isFirstRender = useRef(true);
//   const prevCartItemsJSON = useRef('');

//   const debouncedSyncCart = useCallback(
//     debounce(async (items, userID)=>{
//         if(userID){
//             try{
//                 await firebaseUpdateCartService(userID, items);
//             }catch(error){
//                 console.error('Failed to sync cart with Firebase:', error);
//             }
//         }
//     }, 800),[])

//   useEffect(() => {
//     if(isFirstRender.current){
//       isFirstRender.current = false;
//       prevCartItemsJSON.current = JSON.stringify(cartItems);

//       return
//     }

//     if (isFirstRender.current && userID) {
//       isFirstRender.current = false;

//       return;
//     }

//     const currentCartItemsJSON = JSON.stringify(cartItems);

//     if(currentCartItemsJSON !== prevCartItemsJSON.current){
//       debouncedSyncCart(cartItems, userID);
//       prevCartItemsJSON.current = currentCartItemsJSON;
//     }

//     return ()=>{ debouncedSyncCart.cancel()}

//   },[cartItems, userID, debouncedSyncCart])
// }


//!
// export const useCartSync = () => {
//   const cartItems = useAppSelector(selectCartItemsArray);
//   const userID = useAppSelector((state) => state.auth.user?.uid);

//   const isUserLoading = useAppSelector((state)=>state.auth.loading)

//   const dispatch = useAppDispatch();
//   const isFirstRender = useRef(true);
//   const prevCartItemsJSON = useRef('');

//   const debouncedSyncCart = useCallback(
//     debounce(async (items, id) => {
//       console.log('update CART');
//       if (id) {
//         try {
//           await firebaseUpdateCartService(id, items);
//         } catch (error) {
//           console.error('Failed to sync cart with Firebase:', error);
//         }
//       }
//     }, 1000),
//     []
//   );

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       if (userID) {
//         try {
//           const cartData = await firebaseGetCartService(userID);
//           dispatch(setCartItems(cartData));
//         } catch (error) {
//           console.error('Failed to fetch cart items:', error);
//         }
//       }
//     };
//     console.log(isUserLoading)
//     if (isFirstRender.current && !isUserLoading) {
//       isFirstRender.current = false;
//       if (userID) {
//         fetchCartItems();
//       }
//       prevCartItemsJSON.current = JSON.stringify(cartItems);
//       return;
//     }

//     const currentCartItemsJSON = JSON.stringify(cartItems);

//     if (currentCartItemsJSON !== prevCartItemsJSON.current) {
//       debouncedSyncCart(cartItems, userID);
//       prevCartItemsJSON.current = currentCartItemsJSON;
//     }

//     return () => {
//       debouncedSyncCart.cancel();
//     };
//   }, [cartItems, userID, debouncedSyncCart, dispatch,isUserLoading]);
// };

//!
// export const useCartSync = () => {
//   const cartItems = useAppSelector(selectCartItemsArray);
//   const userID = useAppSelector((state) => state.auth.user?.uid);
//   const isUserLoading = useAppSelector((state) => state.auth.loading);
//   const dispatch = useAppDispatch();

//   const isFirstRender = useRef(true);
//   const prevCartItemsJSON = useRef('');

//   const debouncedSyncCart = useCallback(
//     debounce(async (items, id) => {
//       console.log('update CART');
//       if (id) {
//         try {
//           await firebaseUpdateCartService(id, items);
//         } catch (error) {
//           console.error('Failed to sync cart with Firebase:', error);
//         }
//       }
//     }, 800),
//     []
//   );

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       if (userID) {
//         try {
//           const cartData = await firebaseGetCartService(userID);
//           dispatch(setCartItems(cartData));
//         } catch (error) {
//           console.error('Failed to fetch cart items:', error);
//         }
//       }
//     };

//     if (isFirstRender.current && !isUserLoading) {
//       isFirstRender.current = false;
//       if (userID) {
//         fetchCartItems();
//       }
//       prevCartItemsJSON.current = JSON.stringify(cartItems);
//       return;
//     }

//     if (!isUserLoading && userID) {
//       const currentCartItemsJSON = JSON.stringify(cartItems);

//       if (currentCartItemsJSON !== prevCartItemsJSON.current) {
//         debouncedSyncCart(cartItems, userID);
//         prevCartItemsJSON.current = currentCartItemsJSON;
//       }
//     }

//     return () => {
//       debouncedSyncCart.cancel();
//     };
//   }, [cartItems, userID, debouncedSyncCart, dispatch, isUserLoading]);
// };


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