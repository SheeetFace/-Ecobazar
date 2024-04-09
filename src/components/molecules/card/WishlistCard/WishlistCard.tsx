import Button from '../../../atoms/Button/Button';
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
                <span>{currentCost}</span>
                <span className={styles._old}>{oldCost}</span>
            </div>

            <div className={styles._status}>
                {+stockStatus >0 ? 
                    <LabelBadge label='IN STOCK' className={styles._inStock}/>
                :
                    <LabelBadge label='OUT OF STOCK' className={styles._outOfStock}/>
                }
            </div>

            <div className={styles._buttonsContainer}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight'
                            text='Add to Cart'
                            type='button'/>
                <CrossIcon/>
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