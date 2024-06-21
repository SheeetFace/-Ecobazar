import { NavLink } from 'react-router-dom';

import styles from '../TitleWithViewAll/TitleWithViewAll.module.scss';

interface TitleWithViewAllProps {
    title: string;
    path: string;
}

const TitleWithViewAll:React.FC<TitleWithViewAllProps> = ({title,path}) => {

  return (
    <div className={styles.TitleWithViewAll}>
      <span>{title}</span>
        <NavLink to={path} className='_navLinkGreenPrimaryLetterSpacing'>
          View All ➔
        </NavLink> 
    </div>
  )
}

export default TitleWithViewAll;