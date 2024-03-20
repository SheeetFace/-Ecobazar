import FooterTop from '../../molecules/footer/FooterTop/FooterTop';

import styles from '../Footer/Footer.module.scss';

const Footer:React.FC = ()=>{

    return (
        <footer className={styles.Footer}>
            <div className='center'>
                <FooterTop/>
            </div>
            
        </footer>
    )
}
export default Footer;