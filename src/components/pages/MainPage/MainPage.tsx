import BannerTop from '../../organisms/banner/mainPage/BannerTop/BannerTop';
import Feature from '../../organisms/Feature/Feature';
import PopularCategories from '../../organisms/pages/mainPage/PopularCategories/PopularCategories';
import PopularProducts from '../../organisms/pages/mainPage/PopularProducts/PopularProducts';
import BannerCenter from '../../organisms/banner/mainPage/BannerCenter/BannerCenter';
import HotDeals from '../../organisms/pages/mainPage/HotDeals/HotDeals';
import BannerBottom from '../../organisms/banner/mainPage/BannerBottom/BannerBottom';
import FeaturedProducts from '../../organisms/pages/mainPage/FeaturedProducts/FeaturedProducts';
import LatestNews from '../../organisms/pages/mainPage/LatestNews/LatestNews';
import ClientTestimonials from '../../organisms/ClientTestimonials/ClientTestimonials';
import Brand from '../../molecules/pages/mainPage/Brand/Brand';
import FollowUsOnInstagram from '../../organisms/pages/mainPage/FollowUsOnInstagram/FollowUsOnInstagram';

import { featureMainPageData} from '../../../data/feature';

import styles from '../MainPage/MainPage.module.scss';

const MainPage:React.FC = () =>{

    return(
        <section className={styles.MainPage}>
            <BannerTop/>
            <div className='center'>
                <div className={styles._feature}>
                    <Feature data={featureMainPageData}/>
                </div>
            </div>
            <PopularCategories/>
            <PopularProducts/>
            <BannerCenter/>
            <HotDeals/>
            <BannerBottom/>
            <FeaturedProducts/>
            <LatestNews/>
            <ClientTestimonials/>
            <Brand/>
            <FollowUsOnInstagram/>
        </section>
    )
}
export default MainPage;