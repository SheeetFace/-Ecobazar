import { useEffect, useCallback, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';

import debounce from 'lodash.debounce';

import type { RootState } from '../../store/store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SyncOptions<T>{
  selectItems: (state:RootState) => T
  setItems: (items:T) =>  PayloadAction<T>
  getService: (userID:string) => Promise<T>
  updateService: (userID:string, items: T) => Promise<{items:T}>
}

export const useDataSync = <T,>({selectItems, setItems, getService, updateService}:SyncOptions<T>)=>{

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const userID = useAppSelector((state) => state.auth.user?.uid);
    const isUserLoading = useAppSelector((state) => state.auth.loading);

    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    const prevUserID = useRef<string|null>(null);
    const prevItemsJSON = useRef('');

    const debouncedSync = useCallback(
    debounce(async (items:T, id:string)=>{
        if(id){
            try{
                await updateService(id, items);
            }catch(error){
                console.error('Failed to sync data with Firebase:', error);
            }
        }
    }, 800),[updateService]);

    useEffect(()=>{
        const fetchItems = async()=>{
            if(userID){
                try{
                    const data = await getService(userID);
                    dispatch(setItems(data));
                    prevItemsJSON.current = JSON.stringify(data);
                }catch(error){
                    console.error('Failed to fetch items:', error);
                }
            }
    }

    if(!isUserLoading){
        if(userID !== prevUserID.current && userID){ // user has changed (logged in)
            prevUserID.current = userID;
            fetchItems();
        }else if(userID !== prevUserID.current && !userID){ // user has logged out
            prevUserID.current = null;
            prevItemsJSON.current = '[]';
        }else if(!isInitialized && userID){ // first render with a logged-in user
            fetchItems();
        }

        setIsInitialized(true);
    }
    },[userID, isUserLoading, dispatch, getService, setItems])

    useEffect(()=>{
        if(isInitialized && !isUserLoading && userID){
            const currentItemsJSON = JSON.stringify(items);

            if(currentItemsJSON !== prevItemsJSON.current){
                debouncedSync(items, userID);
                prevItemsJSON.current = currentItemsJSON;
            }
        }

        return () => { debouncedSync.cancel() };

    },[items, userID, debouncedSync, isUserLoading, isInitialized]);
}