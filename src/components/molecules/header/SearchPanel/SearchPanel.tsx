import {useRef, useContext, useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

import useValidation from '../../../../hooks/useValidation';

import { filterTypeGuard } from '../../../../utils/filterTypeGuard';
import { isProductFilterEmpty } from '../../../../utils/filter/isProductFilterEmpty';

import { useSearch,SearchProvider } from '../../../../context/MainSearchContext';
import { ProductFilterContext } from '../../../../context/ProductFilterContext';

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

    const navigate = useNavigate();
    const location = useLocation();

    const { filter, changeFilter, clearFilter } = useContext(ProductFilterContext);

    const {query,setQuery,suggestions, setSuggestions } = useSearch();

    const {isValid, validateFn} = useValidation();

    const isLocationShop = location.pathname ==='/shop'

    useEffect(()=>{
      if(!isLocationShop && ref.current) handleClear()
    },[location.pathname, filter.search])

    useEffect(()=>{
        const isFilterEmpty = isProductFilterEmpty(filter)

        if(isFilterEmpty && ref.current) handleClear()
          
    },[filter.search])


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
        if(!isLocationShop){
          const userInput = event.target.value;
          setQuery(userInput);
    
          if(userInput === ''){
            setSuggestions([]);
            return;
          }
    
          const filteredSuggestions = shopProductData.filter((suggestion) =>
            suggestion.name.toLowerCase().includes(userInput.toLowerCase())
          );
    
          setSuggestions(filteredSuggestions);
    
          if(ref.current) ref.current.value = userInput;
          
        }else{
          filterTypeGuard(filter, changeFilter, 'search', event.target.value);
    
          if(ref.current) ref.current.value = event.target.value;
        }
    }

    const handleClear =()=>{
      clearFilter()
      setQuery('')
      ref.current!.value='' 
    }

    const redirectToShop = ()=>{
        if(isValid && suggestions.length>=1 && !isLocationShop){
            const state = {searchFilter: query}
            navigate('/shop', {state});
        }
    }

    return(
        <div className={styles._container} >
            <form className={styles.SearchPanel} 
                  onSubmit={handleSubmit}
                  id='searchPanelForm'>

                <Input placeholder='Search'
                    type='text' 
                    forwardRef={ref}
                    // value={inputValue} 
                    // value={!isLocationShop ? query :filter.search} //!filter.search
                    changeFn={handleChange}
                    className={isValid ?"_searchInput":"_invalidSearchInput"}
                />
                <Button className='Search'
                        icon={<SearchIcon/>}
                        type='submit'
                        onClick={redirectToShop}/>

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

