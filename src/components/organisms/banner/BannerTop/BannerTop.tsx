import SaleUp from '../../../molecules/banner/bannerTop/SaleUp/SaleUp';
import SummerSale from '../../../molecules/banner/bannerTop/SummerSale/SummerSale';
import BestDeal from '../../../molecules/banner/bannerTop/BestDeal/BestDeal';

import styles from '../BannerTop/BannerTop.module.scss';


const BannerTop:React.FC = () => {

  return (
    <div className={styles.BannerTop}>
        <div className='center'>
            <div className={styles._container}>

                <div className={styles._bigBanner}>
                  <SaleUp/>
                </div>

                <div className={styles._wrapper}>
                  <SummerSale/>
                  <BestDeal/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BannerTop;