import {useRef, useState, useEffect} from 'react'

import Button from '../../atoms/Button/Button';
import SearchIcon from '../../atoms/icon/navigate/SearchIcon';
import Input from '../../atoms/Input/Input';

import styles from '../SearchPanel/SearchPanel.module.scss'

import type {FormEvent} from 'react';

const SearchPanel =()=>{

    const [isSearchValid, setIsSearchValid] =useState<boolean>(true);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(()=>{
 
        if(!isSearchValid){
          const timeout = setTimeout(()=>{
            setIsSearchValid(true);
            ref.current!.value = "";
          },200);
      
          return ()=>clearTimeout(timeout);
        }
      }, [isSearchValid]);

      console.log(ref.current?.value||'')
    const handleSubmit =(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(ref.current){
            if(ref.current.value.trim() !== ''){
                console.log(ref.current.value);
                ref.current.value = '';
            }else{
                setIsSearchValid(false);
            }
        }else{
            console.error('ref.current in handleSubmit SearchPanel')
        }
    }


    return(
        <form className={styles.SearchPanel}
              onSubmit={handleSubmit}>

            <Input placeholder='Search'
                   type='text' 
                   forwardRef={ref}
                   className={isSearchValid ?"_searchInput":"_isInvalidSearchInput"}
            />
            <Button className='Search'
                    icon={<SearchIcon/>}
                    type='submit'/>

        </form>
    )
}
export default SearchPanel;