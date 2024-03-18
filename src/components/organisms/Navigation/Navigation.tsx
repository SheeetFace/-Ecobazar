import NavLinks from '../../molecules/NavLinks/NavLinks';
import PhoneCall from '../../molecules/contact/PhoneCall/PhoneCall';

import styles from '../Navigation/Navigation.module.scss';



const Navigation:React.FC = ()=>{

    return(
        <section className={styles.Navigation}>
            <div className='center'>
                <div className={styles._container}>
                    <NavLinks/>
                    <PhoneCall isIcon={true} className={styles.stylesColor} />
                </div>
            </div>
        </section>
    )
}
export default Navigation;