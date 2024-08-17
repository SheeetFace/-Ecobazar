import useScrollToTop from '../../../hooks/useScrollToTop';

import ContactInfo from '../../molecules/pages/contactPage/ContactInfo/ContactInfo';
import ContactForm from '../../organisms/pages/contactPage/ContactForm/ContactForm';

import { MapLocation } from 'react-google-map-location'

import styles from '../ContactPage/ContactPage.module.scss';

const ContactPage:React.FC = () => {

    useScrollToTop(0);

    return (
        <section className={styles.ContactPage}>
            
            <div className='center'>
                <div className={styles._container}>
                    <ContactInfo/>
                    <ContactForm/>
                </div>
            </div>
            <div className={styles._mapLocation}>
              <MapLocation
                location="120 W Sioux Ave, Pierre, SD 57501, United States" 
                zoom={17} 
                height='400px'
                mapType="satellite" 
                loading="lazy" 
              />
            </div>
            
        </section> 
    )
}

export default ContactPage;
