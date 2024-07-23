import useScrollToTop from '../../../hooks/useScrollToTop';

import ContactInfo from '../../molecules/pages/contactPage/ContactInfo/ContactInfo';
import ContactForm from '../../organisms/pages/contactPage/ContactForm/ContactForm';

import MapLocation from '../../molecules/pages/contactPage/MapLocation/MapLocation';

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

            <MapLocation/>
        </section>
    )
}

export default ContactPage;