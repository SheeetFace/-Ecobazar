import SummerSale from '../../../molecules/banner/bannerBottom/SummerSale/SummerSale';

import styles from '../BannerBottom/BannerBottom.module.scss';

const BannerBottom:React.FC = () => {

    return (
        <div className={styles.BannerBottom}>
            <div className='center'>
                <SummerSale/>
            </div>
        </div>
    )
}

export default BannerBottom;