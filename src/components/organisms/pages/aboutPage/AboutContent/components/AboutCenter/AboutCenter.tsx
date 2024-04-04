import Feature from '../../../../../Feature/Feature';
import { featureAboutPageData } from '../../../../../../../data/feature';

import styles from '../AboutCenter/AboutCenter.module.scss';

const AboutCenter:React.FC = () => {

    return (
        <section className={styles.AboutCenter}>

            <div className={styles._background}/>

            <div className={styles._container}>
                <div className={styles._content}>
                    <span className={styles._title}>100% Trusted Organic Food Store</span>
                    <span className={styles._description}>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.</span>

                    <Feature data={featureAboutPageData}/>
                </div>
            </div>

        </section>
    )
}

export default AboutCenter;