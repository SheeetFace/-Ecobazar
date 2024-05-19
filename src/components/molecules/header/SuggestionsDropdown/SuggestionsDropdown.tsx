import { useSearch } from '../../../../context/MainSearchContext';

import SuggestionsResult from '../components/SuggestionsResult/SuggestionsResult';
import NoSuggestionsResult from '../components/NoSuggestionsResult/NoSuggestionsResult';

import styles from './SuggestionsDropdown.module.scss';


const SuggestionsDropdown = () => {
  const { query, suggestions } = useSearch();

  const isNoResults = query && suggestions.length === 0;
  const showOverlay = query && (suggestions.length > 0 || isNoResults);

  if(isNoResults){
    return(
      <div className={`${styles._overlay} ${showOverlay ? styles.show : styles.hide}`}>
        <NoSuggestionsResult/>
      </div>
    )
  }

  return(
    <div className={`${styles._overlay} ${showOverlay ? styles.show : styles.hide}`}>
      <SuggestionsResult suggestions={suggestions}/>
    </div>
  );
};

export default SuggestionsDropdown;