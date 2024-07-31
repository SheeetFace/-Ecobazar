import { NavLink } from 'react-router-dom';

import Button from '../../../../atoms/Button/Button';

import styles from '../BlogPostBannerSummerSale/BlogPostBannerSummerSale.module.scss';

const BlogPostBannerSummerSale:React.FC = () => {

    return (
        <section className={styles.BlogPostBannerSummerSale} aria-label="Summer Sale Banner - Shop Fresh Fruit">
            
            <div className={styles._leftContainer}>   
                <span className={styles._title}>SUMMER SALES</span>
                <h1>Fresh Fruit</h1>
                <NavLink to={'/shop'} className='_navLink _navLinkWidthMaxContent' aria-label='Go to Shop for Fresh Fruit'>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight ' type='button' text='Shop now &#10132;'/>
                </NavLink>

            </div>

            <div className={styles._centerContainer}>
                <span>UP TO</span>
                <span className={styles._percents}>56%</span>
                <span>OFF</span>
            </div>
        </section>
    )
}

export default BlogPostBannerSummerSale;