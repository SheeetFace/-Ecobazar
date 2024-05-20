import { useLocation } from 'react-router-dom';

import { useSearch } from '../../../../context/MainSearchContext';

import SuggestionsResult from '../components/SuggestionsResult/SuggestionsResult';
import NoSuggestionsResult from '../components/NoSuggestionsResult/NoSuggestionsResult';

import styles from './SuggestionsDropdown.module.scss';


const SuggestionsDropdown = () => {
  const { query, suggestions } = useSearch();

  const location = useLocation();

  const isNoResults = query && suggestions.length === 0;
  const showOverlay = query && (suggestions.length > 0 || isNoResults);

  const renderContent = ()=>{
    if(location.pathname !=='/shop'){
      return(
        <div className={`${styles._overlay} ${showOverlay ? styles.show : styles.hide}`}>
          {isNoResults ? <NoSuggestionsResult/> : <SuggestionsResult suggestions={suggestions}/>}
        </div>
      )
    }else{
      return null
    }
  }

  return( renderContent());
};

export default SuggestionsDropdown;