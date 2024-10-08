import useScrollToTop from '../../../hooks/useScrollToTop';

import Wishlist from '../../organisms/pages/wishlistPage/Wishlist/Wishlist';

import styles from '../WishlistPage/WishlistPage.module.scss';

const WishlistPage:React.FC = () => {

    useScrollToTop(0);

    return (
        <section className={styles.WishlistPage}>
            <div className='center'>
                <h1 className={styles._title}>My Wishlist</h1>
                <Wishlist/>
            </div>
        </section>
    )
}

export default WishlistPage;