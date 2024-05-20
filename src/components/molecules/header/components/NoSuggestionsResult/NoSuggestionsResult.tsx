import { useRef } from 'react';

import { useSearch } from '../../../../../context/MainSearchContext';

import useScrollLock from '../../../../../hooks/useScrollLock';
import useCloseModal from '../../../../../hooks/useCloseModal';

import styles from '../NoSuggestionsResult/NoSuggestionsResult.module.scss';


const NoSuggestionsResult:React.FC = () => {

    const { setQuery } = useSearch();

    const NoResultsRef = useRef<HTMLDivElement | null>(null);

    useScrollLock(true,{ current: null });

    useCloseModal({closeFn:clearQuery,modalCloseRef:NoResultsRef})

    function clearQuery(){
      setQuery('')
    }

    return (
        <div className={styles.NoSuggestionsResult} ref={NoResultsRef}>
            <span>Nothing was found 😭</span>
        </div>
    )
}

export default NoSuggestionsResult;