import styles from '../Footer/Footer.module.scss';

import Newsletter from '../../molecules/footer/Newsletter/Newsletter';

const Footer:React.FC = ()=>{

    return (
        <footer className={styles.Footer}>
            <Newsletter/>
        </footer>
    )
}
export default Footer;