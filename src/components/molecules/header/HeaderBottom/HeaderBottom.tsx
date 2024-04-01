import Logo from '../../Logo/Logo';
import SearchPanel from '../SearchPanel/SearchPanel';
import ShoppingActions from '../components/ShoppingActions/ShoppingActions';

import styles from '../HeaderBottom/HeaderBottom.module.scss'

const HeaderCenter:React.FC = ()=>{
    return(
        <section className={styles.HeaderBottom}>
            <div className='center'>
                <div className={styles._container}>
                        <Logo className={styles._logo}/>
                        <SearchPanel/>
                        <ShoppingActions/>
                </div>

            </div>
        </section>
    )
}
export default HeaderCenter;