import { useAppDispatch } from '../../../../store/store';

import { toggleCartItem } from '../../../../store/slices/cartSlice';

import Quantity from '../components/Quantity/Quantity';
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
    
    const dispatch = useAppDispatch();

    const handleRemove =()=>{
        dispatch(toggleCartItem(id));
    }

    return (
        <>
            <button className={`defaultButtonStyle ${styles._removeButton}`}  onClick={handleRemove} aria-label={`Remove ${name} from cart`}>
                <div className={styles._cross}>
                    <CrossIcon/>
                </div>                 
            </button>

            <div className={styles.ShoppingCartCard}>
                <figure className={styles._product}>
                    <div className={styles._imgContainer}>
                        <img src={src} 
                            alt={name}
                            width='90'
                            height='90'
                            loading="lazy"
                        />
                    </div>
                    <figcaption>
                        <span>{name}</span>
                    </figcaption>
                </figure>

                <div className={styles._costContainer}>
                    <span>${currentCost}</span>
                    <span className={styles._old}>{oldCost}</span>
                </div>

                <div className={styles._quantity}>
                    <Quantity id={id}/>
                </div>

                <div className={styles._subtotal}>
                    <SubTotal price={+currentCost} id={id}/>
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