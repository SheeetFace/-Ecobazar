import useScrollLock from '../../../../../hooks/useScrollLock';

import styles from '../NoSuggestionsResult/NoSuggestionsResult.module.scss';


const NoSuggestionsResult:React.FC = () => {

    useScrollLock(true,{ current: null });

    return (
        <div className={styles.NoSuggestionsResult}>
            <span>Nothing was found 😭</span>
        </div>
    )
}

export default NoSuggestionsResult;