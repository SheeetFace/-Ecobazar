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
        <div className={styles.WishlistCard}>
            <div className={styles._product}>
                <div className={styles._imgContainer}>
                    <img alt={name} src={src}/>
                </div>
                <span>{name}</span>
            </div>

            <div className={styles._costContainer}>
                <span>${currentCost}</span>
                <span className={styles._old}>{oldCost}</span>
            </div>

            <div className={styles._status}>
                <LabelBadge label={isStockStatus ? 'IN STOCK':'OUT OF STOCK'}
                            className={isStockStatus ? styles._inStock : styles._outOfStock}
                />
            </div>

            <div className={styles._buttonsContainer}>

                <div className={styles._toggle}>
                    <ButtonAddToCart id={id} isStockStatus={isStockStatus}/>
                </div>

                <button className='defaultButtonStyle' onClick={handleRemove}>
                    <div className={styles._cross}>
                        <CrossIcon/>
                    </div>
                </button>
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
