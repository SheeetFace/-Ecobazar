import ApplePayIcon from '../../../../atoms/icon/partner/ApplePayIcon';
import MasterCardIcon from '../../../../atoms/icon/partner/MasterCardIcon';
import VisaIcon from '../../../../atoms/icon/partner/VisaIcon';
import DiscoverIcon from '../../../../atoms/icon/partner/DiscoverIcon';
import SecureIcon from '../../../../atoms/icon/partner/SecureIcon';


import styles from '../PartnerList/PartnerList.module.scss'

const PartnerList = ()=>{

    return(
        <div className={styles.PartnerList}>
            <ApplePayIcon/>
            <MasterCardIcon/>
            <VisaIcon/>
            <DiscoverIcon/>
            <SecureIcon/>
        </div>
    )
}
export default PartnerList;