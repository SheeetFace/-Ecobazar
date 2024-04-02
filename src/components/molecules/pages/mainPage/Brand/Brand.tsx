import StepsIcon from '../../../../atoms/icon/brand/StepsIcon';
import MangoIcon from '../../../../atoms/icon/brand/MangoIcon';
import FoodNetIcon from '../../../../atoms/icon/brand/FoodNetIcon';
import FoodCoIcon from '../../../../atoms/icon/brand/FoodCoIcon';
import BookOffIcon from '../../../../atoms/icon/brand/BookOffIcon';
import GSeriesIcon from '../../../../atoms/icon/brand/GSeriesIcon';

import Divider from '../../../../atoms/Divider/Divider';

import styles from '../Brand/Brand.module.scss';

const Brand:React.FC = () => {

    return (
        <section className={styles.Brand}>
            <div className='center'>
                <div className={styles._container}>
                    <StepsIcon/>
                    <Divider className={styles._divider} type='vertical'/>
                    <MangoIcon/>
                    <Divider className={styles._divider} type='vertical'/>
                    <FoodNetIcon/>
                    <Divider className={styles._divider} type='vertical'/>
                    <FoodCoIcon/>
                    <Divider className={styles._divider} type='vertical'/>
                    <BookOffIcon/>
                    <Divider className={styles._divider} type='vertical'/>
                    <GSeriesIcon/>
                </div>
            </div>
        </section>
    )
}

export default Brand;