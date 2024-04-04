import AboutTop from '../../../../molecules/pages/aboutPage/AboutTop/AboutTop';
import AboutCenter from './components/AboutCenter/AboutCenter';
import AboutBottom from '../../../../molecules/pages/aboutPage/AboutBottom/AboutBottom';

import styles from '../AboutContent/AboutContent.module.scss';

const AboutContent:React.FC = () => {

    return (
        <section className={styles.AboutContent}>

            <div className='center'>
                <AboutTop/>
            </div>

            <AboutCenter/>

            <AboutBottom/>

        </section>
    )
}

export default AboutContent;