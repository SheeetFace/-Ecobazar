import SaleUp from '../../../molecules/banner/bannerTop/SaleUp/SaleUp';

import styles from '../BannerTop/BannerTop.module.scss';


const BannerTop:React.FC = () => {

  return (
    <div className={styles.BannerTop}>
        <div className='center'>
            <div className={styles._container}>
                <SaleUp/>
            </div>
        </div>

    </div>
  )
}

export default BannerTop;