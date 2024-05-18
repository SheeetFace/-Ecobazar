import {useRef} from 'react'

import useValidation from '../../../../hooks/useValidation';

import { useSearch,SearchProvider } from '../../../../context/MainSearchContext';

import Button from '../../../atoms/Button/Button';
import SearchIcon from '../../../atoms/icon/navigate/SearchIcon';
import Input from '../../../atoms/form/Input/Input';
import SuggestionsDropdown from '../SuggestionsDropdown/SuggestionsDropdown';

import { shopProductData } from '../../../../data/temp/shopProductData';

import styles from '../SearchPanel/SearchPanel.module.scss'

import { ValidateSearchOrSubscribeTypes } from '../../../../types/validateSearchOrSubscribeTypes';

import type {FormEvent,ChangeEvent} from 'react';


const SearchPanel =()=>{

    const ref = useRef<HTMLInputElement>(null);

    const {setQuery, setSuggestions } = useSearch();

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

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const userInput = event.target.value;
        setQuery(userInput);

        if(userInput === ''){
            setSuggestions([])
            return
        }

        const filteredSuggestions = shopProductData.filter(
            suggestion=>suggestion.name.toLowerCase().includes(userInput.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    return(
        <div className={styles._container}>
            <form className={styles.SearchPanel}
                onSubmit={handleSubmit}>

                <Input placeholder='Search'
                    type='text' 
                    forwardRef={ref}
                    changeFn={handleChange}
                    className={isValid ?"_searchInput":"_invalidSearchInput"}
                />
                <Button className='Search'
                        icon={<SearchIcon/>}
                        type='submit'/>

            </form>

            <SuggestionsDropdown />
        </div>
    )
}

const SearchPanelWithProvider =()=>(
  <SearchProvider>
    <SearchPanel />
  </SearchProvider>
);

export default SearchPanelWithProvider;
