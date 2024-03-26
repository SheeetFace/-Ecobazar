import BannerTop from '../../organisms/banner/BannerTop/BannerTop';
import Feature from '../../organisms/Feature/Feature';
import PopularCategories from '../../organisms/PopularCategories/PopularCategories';
import PopularProducts from '../../organisms/PopularProducts/PopularProducts';
import BannerCenter from '../../organisms/banner/BannerCenter/BannerCenter';

import styles from '../MainPage/MainPage.module.scss';

const MainPage:React.FC = () =>{

    return(
        <section className={styles.MainPage}>
            <BannerTop/>
            
            <div className='center'>
                <div className={styles._feature}>
                    <Feature countFeatures={4}/>
                </div>
            </div>

            <PopularCategories/>
            <PopularProducts/>

            <BannerCenter/>

        </section>
    )
}
export default MainPage;