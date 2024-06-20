import { useRef, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../../../store/store';

import SuggestionsResult from '../components/SuggestionsResult/SuggestionsResult';
import NoSuggestionsResult from '../components/NoSuggestionsResult/NoSuggestionsResult';

import styles from './SuggestionsDropdown.module.scss';

const SuggestionsDropdown = () => {
  const query = useAppSelector((state)=> state.mainSearch.query);
  const suggestions = useAppSelector((state)=> state.mainSearch.suggestions);

  const location = useLocation();

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const prevPathname = useRef<string>(location.pathname);
  const isFirstTimePathChange = useRef<boolean>(false);

  const isNoResults = query && suggestions.length === 0;
  const showOverlay = query && (suggestions.length > 0 || isNoResults);

  const overlayClassName = `${styles._overlay} ${!showOverlay || isFirstTimePathChange.current ? styles.hide : styles.show}`;

  const hideOverlay = () => {
    overlayRef.current?.classList.add(styles.hide);
    overlayRef.current?.classList.remove(styles.show);
  };

  const showOverlayElement = () => {
    overlayRef.current?.classList.add(styles.show);
    overlayRef.current?.classList.remove(styles.hide);
  };

  useEffect(() => {
    if(location.pathname !== prevPathname.current) {
      isFirstTimePathChange.current = true;
      prevPathname.current = location.pathname;

      if(overlayRef.current){
        overlayRef.current.classList.add(styles.hide);

        const timeoutId = setTimeout(() => {
          if(location.pathname !== '/shop' && showOverlay) showOverlayElement();
          else hideOverlay();

          isFirstTimePathChange.current = false;
        },500);

        return () => clearTimeout(timeoutId);
      }
    }else{
      if(showOverlay) showOverlayElement();
      else hideOverlay();
    }
  }, [location.pathname, showOverlay]);

  if(location.pathname === '/shop') return null;


  return(
    <div ref={overlayRef} className={overlayClassName}>
      {isNoResults ? <NoSuggestionsResult /> : <SuggestionsResult suggestions={suggestions} />}
    </div>
  );

};

export default SuggestionsDropdown;

