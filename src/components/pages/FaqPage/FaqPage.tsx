import useScrollToTop from '../../../hooks/useScrollToTop';

import Accordion from '../../organisms/pages/faqPage/Accordion/Accordion';

import person1 from '../../../assets/persons/person1.webp';

import styles from '../FaqPage/FaqPage.module.scss';

const FaqPage:React.FC = () => {

    useScrollToTop(0);

    return (
        <section className={styles.FaqPage}>
            <div className='center'>
                <div className={styles._container}>
                    <div className={styles._accordion}>
                        <span className={styles._title}>Welcome, Let’s Talk About Our Faq</span>
                        <Accordion/>
                    </div>

                    <div className={styles._imgWrapper}>
                        <img src={person1} alt='Grandpa with a box of fresh vegetables.'/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FaqPage;