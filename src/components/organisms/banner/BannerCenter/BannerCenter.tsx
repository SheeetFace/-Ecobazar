import SaleOfTheMonth from '../../../molecules/banner/bannerCenter/SaleOfTheMonth/SaleOfTheMonth';

import styles from '../BannerCenter/BannerCenter.module.scss';

const BannerCenter:React.FC = () => {

    return (
        <div className={styles.BannerCenter}>
            <div className='center'>

                <div className={styles._container}>
                    <SaleOfTheMonth/>
                </div>

            </div>
        </div>
    )
}

export default BannerCenter;