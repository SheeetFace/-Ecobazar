import LabelBadge from '../../../atoms/LabelBadge/LabelBadge';
import RatingStars from '../../RatingStars/RatingStars';
import Button from '../../../atoms/Button/Button';

import WishlistIcon from '../../../atoms/icon/navigate/WishlistIcon';
import EyeIcon from '../../../atoms/icon/navigate/EyeIcon';
import CartIcon from '../../../atoms/icon/navigate/CartIcon';

import styles from '../ProductCard/ProductCard.module.scss';

interface ProductsCardProps{
    name:string,
    id:string,
    src:string,
    currentCost:string,
    oldCost:string,
    sale:string,
    rating:string,
}

const ProductsCard:React.FC<ProductsCardProps> = ({name,id,src,currentCost,oldCost,sale,rating}) => {

    //href - vegetable/id---
    
    const addToCart = (id:string)=>{
        console.log(`${id} added to cart`)
    }

    const addToWishlist =(id:string)=>{
        console.log(`${id} added to wishlist`)
    }

    const openQuickView =(id:string)=>{
        console.log(`${id} opened quick view`)
    }

    //придётся _buttonQuickView выносить в другой компонент, 
    //чтобы отслеживать нажата ли уже кнопка или нет, 
    //дабы избежать перерендера компонента всего
    //или нет

    return (
        <div className={styles.ProductsCard}>

            {sale ?  <LabelBadge className={styles._label} label={`Sale ${sale}`}/> :null}
            
            <div className={styles._topButtonsContainer}>
                <div className={styles._buttonWishlist}>
                        <Button className='ButtonTransparent' 
                                icon={<WishlistIcon className={styles._buttonWishlistIcon}/>}
                                onClick={()=>addToWishlist(id)} 
                                type='button'/>
                </div>
                <div className={styles._buttonQuickView}>
                        <Button className='ButtonTransparent' 
                                icon={<EyeIcon className={styles._buttonQuickViewIcon}/>}
                                onClick={()=>openQuickView(id)} 
                                type='button'/>
                </div>
            </div>

            <img src={src} alt={name}/>

            <span className={styles._name}>{name}</span>


            <div className={styles._container}>
                <div className={styles._containerCostAndRating}>
                    <div className={styles._costWrapper}>
                        <span className={styles._currentConst}>
                            {currentCost}
                        </span>

                        <span className={styles._oldCost}>
                            {oldCost}
                        </span>
                    </div>
                    <RatingStars rating={+rating} type='small'/>
                </div>

                <div className={styles._buttonCart}>
                    <Button className='ButtonTransparent' 
                            icon={<CartIcon className={styles._buttonCartIcon}/>}
                            onClick={()=>addToCart(id)} 
                            type='button'/>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard;