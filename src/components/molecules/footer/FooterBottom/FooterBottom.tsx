import PartnerList from '../components/PartnerList/PartnerList';

import styles from '../FooterBottom/FooterBottom.module.scss'

const FooterBottom:React.FC = () =>{

    return(
        <div className={styles.FooterBottom}>
            <span>Ecobazar© 2024. All Rights Reserved</span>
            <PartnerList/>
        </div>
    )
}
export default FooterBottom;