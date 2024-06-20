import { useMemo,memo, useRef } from 'react';

import SuggestionSearchCard from '../../../card/SuggestionSearchCard/SuggestionSearchCard';

import { useAppDispatch,useAppSelector } from '../../../../../store/store';
import { setQuery } from '../../../../../store/slices/mainSearchSlice';

import useScrollLock from '../../../../../hooks/useScrollLock';
import useCloseModal from '../../../../../hooks/useCloseModal';

import styles from '../SuggestionsResult/SuggestionsResult.module.scss';

import type { ProductDataType } from '../../../../../types/productDataTypes';

interface  SuggestionsResultProps{
    suggestions:ProductDataType[]
}

const SuggestionsResult:React.FC<SuggestionsResultProps> = ({ suggestions }) => {

  const dispatch = useAppDispatch();

  const query =useAppSelector((state) => state.mainSearch.query);

  const resultsRef = useRef<HTMLUListElement|null>(null);

  const isNoResults = query && suggestions.length>=1;

  useScrollLock(!!isNoResults, resultsRef);

  useCloseModal({closeFn:clearQuery,modalCloseRef:resultsRef})

  function clearQuery(){
    dispatch(setQuery(''))
  }

  const renderSuggestionSearchCard =useMemo(()=>{
    return suggestions.map((item, i)=>(
      <div onClick={()=>clearQuery()}>
        <SuggestionSearchCard  {...item} key={i}/>
      </div>
    ))
  }, [suggestions,dispatch]);

  return(
      <ul className={styles.SuggestionsResult} ref={resultsRef}>
        {renderSuggestionSearchCard}
      </ul>
  )
}

export default memo(SuggestionsResult);