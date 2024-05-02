import { NavLink } from 'react-router-dom';

import LabelBadge from '../../../atoms/LabelBadge/LabelBadge';
import RatingStars from '../../RatingStars/RatingStars';
import Button from '../../../atoms/Button/Button';
import ButtonWishlist from '../components/ButtonWishlist/ButtonWishlist';
import ButtonQuickView from '../components/ButtonQuickView/ButtonQuickView';

import CartIcon from '../../../atoms/icon/navigate/CartIcon';

import styles from '../ProductCard/ProductCard.module.scss';

import type { ProductDataType as ProductsCardProps} from '../../../../types/productDataTypes';
import type { MouseEvent } from 'react';


const ProductsCard:React.FC<ProductsCardProps> = (props) => {

    const {name, id, src, currentCost, oldCost, sale, rating} = props;


    //href - vegetable/id---
    const addToCart = (id:string,e:MouseEvent)=>{
        e.preventDefault()
        console.log(`${id} added to cart`)
    }


    return (
        <NavLink to={`/shop/productPage/${name}`}
                state={{data:props}} 
                className="_navLink">

            <div className={styles.ProductsCard}>

                {sale ?  <LabelBadge className={styles._label} label={`Sale ${sale}`}/> :null}
                
                <div className={styles._topButtonsContainer}>

                    <ButtonWishlist type='card' id={id}/>

                    <ButtonQuickView {...props}/>
                    
                </div>
                

                <img loading='lazy' src={src} alt={name}/>

                <span className={styles._name}>{name}</span>
                

                <div className={styles._container}>
                    <div className={styles._containerCostAndRating}>
                        <div className={styles._costWrapper}>
                            <span className={styles._currentConst}>
                                ${currentCost}
                            </span>
                            
                            {oldCost ? 
                                <span className={styles._oldCost}>
                                    ${oldCost}
                                </span>
                            :null}
                        </div>
                        <RatingStars rating={+rating} type='small'/>
                    </div>
                    
                    <div className={styles._buttonCart}
                         onClick={(e)=>addToCart(id,e)}>
                        <Button className='ButtonTransparent' 
                                icon={<CartIcon className={styles._buttonCartIcon}/>}
                                type='button'/>
                    </div>
                    
                </div>
            </div>
        </NavLink>
    )
}

export default ProductsCard;