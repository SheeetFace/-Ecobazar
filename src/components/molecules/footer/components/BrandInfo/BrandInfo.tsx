import Logo from '../../../Logo/Logo';
import PhoneCall from '../../../contact/PhoneCall/PhoneCall';

import styles from '../BrandInfo/BrandInfo.module.scss'

const BrandInfo:React.FC = ()=>{
    return(
        <div className={styles.BrandInfo}>
            <Logo className={styles._logo}/>

            <span className={styles._text}>
                Morbi cursus porttitor enim lobortis molestie. 
                Duis gravida turpis dui, eget bibendum magna congue nec.
            </span>

            <div className={styles._contacts}>
                <PhoneCall className={styles._phoneAndEmail}/>
                <span>or</span>
                <span className={styles._phoneAndEmail}>Proxy@gmail.com</span>
            </div>

        </div>
    )
}
export default BrandInfo;