import { useAppSelector } from '../../../../../store/store';

import WishlistIcon from '../../../../atoms/icon/navigate/WishlistIcon';
import ItemCountBadge from '../../../../atoms/header/ItemCountBadge/ItemCountBadge';

import styles from '../styles/styles.module.scss'

const WishListBadge:React.FC = () => {

    const count = useAppSelector((state)=> state.wishlist.items.length)

    return (
        <div className={styles.ComponentBadge}>
            <WishlistIcon className={styles._iconHover} />
            <div className={styles._count}>
                <ItemCountBadge count={count} />
            </div>
        </div>
    )
}

export default WishListBadge;