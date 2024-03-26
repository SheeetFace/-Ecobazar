import SaleOfTheMonth from '../../../molecules/banner/bannerCenter/SaleOfTheMonth/SaleOfTheMonth';
import LowFatMeat from '../../../molecules/banner/bannerCenter/LowFatMeat/LowFatMeat';
import FreshFruit from '../../../molecules/banner/bannerCenter/FreshFruit/FreshFruit';

import styles from '../BannerCenter/BannerCenter.module.scss';

const BannerCenter:React.FC = () => {

    return (
        <div className={styles.BannerCenter}>
            <div className='center'>

                <div className={styles._container}>
                    <SaleOfTheMonth/>
                    <LowFatMeat/>
                    <FreshFruit/>
                </div>

            </div>
        </div>
    )
}

export default BannerCenter;