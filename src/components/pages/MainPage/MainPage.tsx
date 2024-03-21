import BannerTop from '../../organisms/banner/BannerTop/BannerTop';

import styles from '../MainPage/MainPage.module.scss';

const MainPage:React.FC = () =>{

    return(
        <section className={styles.MainPage}>
            <BannerTop/>
        </section>
    )
}
export default MainPage;