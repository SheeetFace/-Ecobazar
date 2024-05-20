import { useMemo,memo, useRef } from 'react';

import SuggestionSearchCard from '../../../card/SuggestionSearchCard/SuggestionSearchCard';

import { useSearch } from '../../../../../context/MainSearchContext';

import useScrollLock from '../../../../../hooks/useScrollLock';
import useCloseModal from '../../../../../hooks/useCloseModal';

import styles from '../SuggestionsResult/SuggestionsResult.module.scss';

import type { ProductDataType } from '../../../../../types/productDataTypes';

interface  SuggestionsResultProps{
    suggestions:ProductDataType[]
}

const SuggestionsResult:React.FC<SuggestionsResultProps> = ({ suggestions }) => {

    const {query, setQuery } = useSearch();

    const resultsRef = useRef<HTMLUListElement|null>(null);

    const isNoResults = query && suggestions.length>=1;

    useScrollLock(!!isNoResults, resultsRef);

    useCloseModal({closeFn:clearQuery,modalCloseRef:resultsRef})
    // useCloseModal({closeFn:clearQuery,modalCloseRef:{current:null}})

    function clearQuery(){
      setQuery('')
    }

    const renderSuggestionSearchCard =useMemo(()=>{
      return suggestions.map((item, i)=>(
        <div onClick={()=>clearQuery()}>
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