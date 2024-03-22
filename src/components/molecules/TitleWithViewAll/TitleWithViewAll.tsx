import Button from '../../atoms/Button/Button';

import styles from '../TitleWithViewAll/TitleWithViewAll.module.scss';

interface TitleWithViewAllProps {
    title: string;
    path: string;
}

const TitleWithViewAll:React.FC<TitleWithViewAllProps> = ({title,path}) => {

  return (
    <div className={styles.TitleWithViewAll}>
            <span>{title}</span>
            <Button text='View All ➔' className='ButtonTransparent colorTextGreenPrimary' type='button'/>
    </div>
  )
}

export default TitleWithViewAll;