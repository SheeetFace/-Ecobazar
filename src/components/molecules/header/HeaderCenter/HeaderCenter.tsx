import Logo from '../../Logo/Logo';
import SearchPanel from '../../SearchPanel/SearchPanel';
import ShoppingActions from '../../ShoppingActions/ShoppingActions';

import styles from '../HeaderCenter/HeaderCenter.module.scss'

const HeaderCenter:React.FC = ()=>{
    return(
        <section className={styles.HeaderCenter}>
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