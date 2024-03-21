import HeaderTop from '../../molecules/header/HeaderTop/HeaderTop';
import HeaderBottom from '../../molecules/header/HeaderBottom/HeaderBottom';

import styles from '../Header/Header.module.scss'

const Header:React.FC =()=>{

    return(
       <header className={styles.Header}>
            <HeaderTop/>
            <HeaderBottom/>
       </header>
    )
}
export default Header;