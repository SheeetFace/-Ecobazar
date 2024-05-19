import { useMemo,memo, useRef } from 'react';

import SuggestionSearchCard from '../../../card/SuggestionSearchCard/SuggestionSearchCard';

import { useSearch } from '../../../../../context/MainSearchContext';
import useScrollLock from '../../../../../hooks/useScrollLock';

import styles from '../SuggestionsResult/SuggestionsResult.module.scss';

import type { ProductDataType } from '../../../../../types/productDataTypes';

interface  SuggestionsResultProps{
    suggestions:ProductDataType[]
}

const SuggestionsResult:React.FC<SuggestionsResultProps> = ({ suggestions }) => {

    const { setQuery } = useSearch();

    const resultsRef = useRef<HTMLUListElement|null>(null);

    useScrollLock(true, resultsRef);

    const renderSuggestionSearchCard =useMemo(()=>{
      return suggestions.map((item, i)=>(
        <div onClick={()=>setQuery('')}>
          <SuggestionSearchCard  {...item} key={i}/>
        </div>
      ))
    }, [suggestions,setQuery]);

    return(
        <ul className={styles.SuggestionsResult} ref={resultsRef}>
            {renderSuggestionSearchCard}
        </ul>
    )
}

export default memo(SuggestionsResult);