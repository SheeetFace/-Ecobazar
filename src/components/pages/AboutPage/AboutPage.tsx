import ClientTestimonials from '../../organisms/ClientTestimonials/ClientTestimonials';
import Brand from '../../molecules/pages/mainPage/Brand/Brand';

import styles from '../AboutPage/AboutPage.module.scss';

const AboutPage:React.FC = () => {

    return (
        <section className={styles.AboutPage}>
            <h1>ABOUT PAGE</h1>

            <ClientTestimonials/>
            <Brand/>
        </section>
    )
}

export default AboutPage;