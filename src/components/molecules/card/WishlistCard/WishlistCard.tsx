import { useAppDispatch } from '../../../../store/store';
import { toggleWishlistItem } from '../../../../store/slices/wishlistSlice';

import ButtonAddToCart from '../../button/ButtonAddToCart/ButtonAddToCart';
import Divider from '../../../atoms/Divider/Divider';
import LabelBadge from '../../../atoms/LabelBadge/LabelBadge';
import CrossIcon from '../../../atoms/icon/action/CrossIcon/CrossIcon';

import styles from '../WishlistCard/WishlistCard.module.scss';

interface WishlistCardProps{
    name:string,
    id:string,
    src:string,
    currentCost:string,
    oldCost:string,
    stockStatus:string,
    isLast:boolean
}

const WishlistCard:React.FC<WishlistCardProps> = ({name,id,src,currentCost,oldCost,stockStatus,isLast}) => {

    const dispatch = useAppDispatch();

    const isStockStatus = +stockStatus > 0;

    const handleRemove =()=>{
        dispatch(toggleWishlistItem(id));
    }

    return (
        <>
        <button className={`defaultButtonStyle ${styles._removeButton}`} 
                onClick={handleRemove}  
                aria-label={`Remove ${name} from wishlist`}>
            <div className={styles._cross}>
                <CrossIcon/>
            </div>
        </button>

        <div className={styles.WishlistCard}>
            <figure className={styles._product}>
                <div className={styles._imgContainer}>
                    <img src={src} 
                         alt={name}
                         width='90'
                         height='90'
                         loading="lazy"/>
                </div>
                <figcaption>
                    <span>{name}</span>
                </figcaption>
            </figure>

            <div className={styles._costContainer}>
                <span>${currentCost}</span>
                <span className={styles._old}>{oldCost}</span>
            </div>

            <div className={styles._status}>
                <LabelBadge label={isStockStatus ? 'IN STOCK':'OUT OF STOCK'}
                            className={isStockStatus ? styles._inStock : styles._outOfStock}
                />
            </div>

            <div className={styles._toggle}>
                <ButtonAddToCart id={id} isStockStatus={isStockStatus}  ariaLabel={`Add ${name} to cart`}/>
            </div>

            </div>  
        {!isLast ? 
            <div className={styles._shoppingAndWishlist_dividerContainer}>
                <Divider type='horizontal' className={styles._shoppingAndWishlist_divider}/>
            </div>
        :null}
        </>
    )
}
export default WishlistCard;

