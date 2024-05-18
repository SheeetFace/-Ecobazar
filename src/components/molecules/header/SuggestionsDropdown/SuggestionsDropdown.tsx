import { useSearch } from '../../../../context/MainSearchContext';

import useScrollLock from '../../../../hooks/useScrollLock';

import NoSuggestionsResult from '../components/NoSuggestionsResult/NoSuggestionsResult';

import styles from './SuggestionsDropdown.module.scss';


const SuggestionsDropdown = () => {
    const { query, suggestions } = useSearch();
  
    const isNoResults = query && suggestions.length === 0;
    const showOverlay = query && (suggestions.length > 0 || isNoResults);
  
    useScrollLock(!!showOverlay);

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
          {suggestions.map((suggestion, i) => (
            <li key={i}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default SuggestionsDropdown;