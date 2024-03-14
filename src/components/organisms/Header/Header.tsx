import HeaderTop from '../../molecules/header/HeaderTop/HeaderTop';
import HeaderCenter from '../../molecules/header/HeaderCenter/HeaderCenter';

import styles from '../Header/Header.module.scss'

const Header:React.FC =()=>{

    return(
       <header className={styles.Header}>
            <HeaderTop/>
            <HeaderCenter/>
       </header>
    )
}
export default Header;