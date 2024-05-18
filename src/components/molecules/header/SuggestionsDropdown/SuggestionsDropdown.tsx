import { useMemo } from 'react';

import SuggestionSearchCard from '../../card/SuggestionSearchCard/SuggestionSearchCard';

import { useSearch } from '../../../../context/MainSearchContext';

import useScrollLock from '../../../../hooks/useScrollLock';

import NoSuggestionsResult from '../components/NoSuggestionsResult/NoSuggestionsResult';

import styles from './SuggestionsDropdown.module.scss';


const SuggestionsDropdown = () => {
    const { query, suggestions, setQuery } = useSearch();
  
    const isNoResults = query && suggestions.length === 0;
    const showOverlay = query && (suggestions.length > 0 || isNoResults);
  
    useScrollLock(!!showOverlay);

    const renderSuggestionSearchCard = useMemo(()=>{
      return suggestions.map((item, i)=>(
        <div onClick={()=>setQuery('')}>
          <SuggestionSearchCard  {...item} key={i}/>
        </div>
      ))
    },[suggestions])


    if(isNoResults){
      return(
        <div className={`${styles._overlay} ${showOverlay ? styles.show : styles.hide}`}>
          <NoSuggestionsResult className={styles._noSuggestions}/>
        </div>
      )
    }

    return(
      <div className={`${styles._overlay} ${showOverlay ? styles.show : styles.hide}`}>
        <ul className={styles._suggestionsDropdown}>
          {renderSuggestionSearchCard}
        </ul>
      </div>
    );
  };

export default SuggestionsDropdown;