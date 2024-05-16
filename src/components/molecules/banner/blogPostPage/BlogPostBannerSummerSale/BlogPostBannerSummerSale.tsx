import { NavLink } from 'react-router-dom';

import Button from '../../../../atoms/Button/Button';

import styles from '../BlogPostBannerSummerSale/BlogPostBannerSummerSale.module.scss';

const BlogPostBannerSummerSale:React.FC = () => {

    return (
        <div className={styles.BlogPostBannerSummerSale}>
            
            <div className={styles._leftContainer}>   
                <span className={styles._title}>SUMMER SALES</span>
                <h1>Fresh Fruit</h1>
                <NavLink to={'/shop'} className='_navLink _navLinkWidthMaxContent'>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight ' type='button' text='Shop now &#10132;'/>
                </NavLink>

            </div>

            <div className={styles._centerContainer}>
                <span>UP TO</span>
                <span className={styles._percents}>56%</span>
                <span>OFF</span>
            </div>
        </div>
    )
}

export default BlogPostBannerSummerSale;