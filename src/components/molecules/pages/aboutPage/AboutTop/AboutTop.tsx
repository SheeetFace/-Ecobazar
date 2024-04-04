import person2 from '../../../../../assets/persons/person2.webp';

import styles from '../AboutTop/AboutTop.module.scss';

const AboutTop:React.FC = () => {

    return (
        <section className={styles.AboutTop}>

            <div className={styles._containerText}>
                <span className={styles._title}>100% Trusted Organic Food Store</span>
                <span className={styles._description}>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.</span>
            </div>

            <div className={styles._containerImg}>
                <img src={person2} alt='Grandpa with vegetables'/>
            </div>
        </section>
    )
}

export default AboutTop;