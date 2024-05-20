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

    const { setQuery } = useSearch();

    const resultsRef = useRef<HTMLUListElement|null>(null);

    useScrollLock(suggestions.length>=1, resultsRef);

    useCloseModal({closeFn:clearQuery,modalCloseRef:resultsRef})

    function clearQuery(){
      setQuery('')
    }

    const renderSuggestionSearchCard =useMemo(()=>{
      return suggestions.map((item, i)=>(
        <div onClick={()=>clearQuery}>
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