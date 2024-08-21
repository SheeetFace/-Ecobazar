import BrandInfo from '../components/BrandInfo/BrandInfo';
import NavigationList from '../components/NavigationList/NavigationList';

import { MyAccountData, HelpsData } from '../../../../config/footerNavigationConfig';

import styles from '../FooterTop/FooterTop.module.scss';


const FooterTop:React.FC = ()=>{

    return(
        <div className={styles.FooterTop}>
            <BrandInfo/>
            <NavigationList data={MyAccountData} title='My Account'/>
            <NavigationList data={HelpsData} title='Helps'/>
        </div>
    )
}
export default FooterTop;