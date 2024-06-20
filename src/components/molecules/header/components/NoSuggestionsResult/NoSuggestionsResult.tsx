import { useRef } from 'react';

import { useAppDispatch } from '../../../../../store/store';
import { setQuery } from '../../../../../store/slices/mainSearchSlice';

import useScrollLock from '../../../../../hooks/useScrollLock';
import useCloseModal from '../../../../../hooks/useCloseModal';

import styles from '../NoSuggestionsResult/NoSuggestionsResult.module.scss';


const NoSuggestionsResult:React.FC = () => {

    const dispatch = useAppDispatch();

    const NoResultsRef = useRef<HTMLDivElement | null>(null);

    useScrollLock(true,{ current: null });

    useCloseModal({closeFn:clearQuery,modalCloseRef:NoResultsRef})

    function clearQuery(){
      dispatch(setQuery(''))
    }

    return (
        <div className={styles.NoSuggestionsResult} ref={NoResultsRef}>
            <span>Nothing was found 😭</span>
        </div>
    )
}

export default NoSuggestionsResult;