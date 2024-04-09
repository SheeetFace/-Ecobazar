import Quantity from './components/Quantity/Quantity';
import SubTotal from './components/SubTotal/SubTotal';
import CrossIcon from '../../../atoms/icon/action/CrossIcon/CrossIcon';
import Divider from '../../../atoms/Divider/Divider';

import styles from '../ShoppingCartCard/ShoppingCartCard.module.scss';

interface ShoppingCartCardProps{
    name:string,
    id:string,
    src:string,
    currentCost:string,
    oldCost:string,
    isLast:boolean
}

const ShoppingCartCard:React.FC<ShoppingCartCardProps> = ({name,id,src,currentCost,oldCost,isLast}) => {

    return (
        <>
        <div className={styles.ShoppingCartCard}>
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

            <div className={styles._quantity}>
                <Quantity/>
            </div>

            <div className={styles._subtotal}>
                <SubTotal price={+currentCost.slice(1)}/>
            </div>
            
            <div>
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

export default ShoppingCartCard;