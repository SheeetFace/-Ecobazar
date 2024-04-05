import Divider from '../../../../atoms/Divider/Divider';

import MapPinIcon from '../../../../atoms/icon/contact/MapPinIcon';
import MailIcon from '../../../../atoms/icon/contact/MailIcon';
import PhoneIcon from '../../../../atoms/icon/contact/PhoneIcon';

import styles from '../ContactInfo/ContactInfo.module.scss';

const ContactInfo:React.FC = () => {

    return (
        <section className={styles.ContactInfo}>
            <div className={styles._container}>
                <MapPinIcon className={styles._icons}/>
                <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
            </div>
            <Divider className={styles._divider} type='horizontal'/>

            <div className={styles._container}>
                <MailIcon className={styles._icons}/>
                <span>Proxy@gmail.com <br/> Help.proxy@gmail.com</span>
            </div>
            <Divider className={styles._divider} type='horizontal'/>

            <div className={styles._container}>
                <PhoneIcon className={styles._icons}/>
                <span>(219) 555-0114 <br/> (164) 333-0487</span>
            </div>
        </section>
    )
}

export default ContactInfo;