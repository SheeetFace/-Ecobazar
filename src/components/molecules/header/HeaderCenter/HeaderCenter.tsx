import Logo from '../../Logo/Logo';
import Devider from '../../../atoms/Devider/Devider';

import styles from '../HeaderCenter/HeaderCenter.module.scss'

const HeaderCenter:React.FC = ()=>{
    return(
        <section className={styles.HeaderCenter}>
            <div className='center'>
                <div className={styles._container}>
                    <Logo className={styles._logo}/>
                    <Devider type='vertical'/>
                </div>

            </div>
        </section>
    )
}
export default HeaderCenter;