import {useRef} from 'react'

import useValidation from '../../../../hooks/useValidation';

import Button from '../../../atoms/Button/Button';
import SearchIcon from '../../../atoms/icon/navigate/SearchIcon';
import Input from '../../../atoms/Input/Input';

import styles from '../SearchPanel/SearchPanel.module.scss'

import { ValidateSearchOrSubscribeTypes } from '../../../../types/validateSearchOrSubscribeTypes';

import type {FormEvent} from 'react';


const SearchPanel =()=>{

    const ref = useRef<HTMLInputElement>(null);

    const {isValid, validateFn} = useValidation();

    const handleSubmit =(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(ref.current){
            const validationResult =validateFn(ref.current.value, ValidateSearchOrSubscribeTypes.SEARCH)

            if(!validationResult.result)  return ref.current.value = '';
            
            console.log(validationResult)

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
                   className={isValid ?"_searchInput":"_invalidSearchInput"}
            />
            <Button className='Search'
                    icon={<SearchIcon/>}
                    type='submit'/>

        </form>
    )
}
export default SearchPanel;