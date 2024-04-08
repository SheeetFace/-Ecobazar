import WishlistIcon from '../../../../atoms/icon/navigate/WishlistIcon';
import ItemCountBadge from '../../../../atoms/header/ItemCountBadge/ItemCountBadge';

import styles from '../styles/styles.module.scss'

const WishListBadge:React.FC = () => {

    return (
        <div className={styles.ComponentBadge}>
            <WishlistIcon className={styles._iconHover} />
            <div className={styles._count}>
                <ItemCountBadge />
            </div>
        </div>
    )
}

export default WishListBadge;