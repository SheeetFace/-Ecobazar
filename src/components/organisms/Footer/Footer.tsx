import FooterTop from '../../molecules/footer/FooterTop/FooterTop';
import Divider from '../../atoms/Divider/Divider';
import FooterBottom from '../../molecules/footer/FooterBottom/FooterBottom';

import styles from '../Footer/Footer.module.scss';

const Footer:React.FC = ()=>{

    return (
        <footer className={styles.Footer}>
            <div className='center'>
                <FooterTop/>
                <Divider type='horizontal' className={styles._divider}/>
                <FooterBottom/>
            </div>
            
        </footer>
    )
}
export default Footer;