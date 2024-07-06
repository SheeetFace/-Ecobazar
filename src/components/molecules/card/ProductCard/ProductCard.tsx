import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

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

    const {name, id, src, currentCost, oldCost, sale, rating,stockStatus} = props;

    const isStockStatus = +stockStatus > 0;

    const { ref, inView} = useInView({
        threshold: .3,
        triggerOnce:true
    });

    const addToCart = (id:string,e:MouseEvent)=>{
        e.preventDefault()
        console.log(`${id} added to cart`)
    }

    return (
        <NavLink to={`/shop/${name}`}
                 state={{data:props}} 
                 className="_navLink">

            <div className={styles.ProductsCard} ref={ref}>

            {!isStockStatus && (
                <div className={styles._isOutOfStock}>
                    <LabelBadge className={styles._labelOutOfStock} label='Out of Stock'/>
                    {/* <span>Out of Stock</span> */}
                </div>
            )}
                {sale &&  <LabelBadge className={styles._label} label={`Sale ${sale}`}/>}

                {inView && 
                    <div className={styles._topButtonsContainer}>

                        <ButtonWishlist type='card' id={id}/>

                        <ButtonQuickView {...props}/>
                    </div>
                }
                
                {inView ? 
                    <div className={styles._imgContainer}>
                        <img loading='lazy' src={src} alt={name}/>
                    </div>
                :
                    <div className={styles._imgSkeleton}></div>
                }
                
                <div className={styles._name}>
                    <span>{name}</span>
                </div>
                
                <div className={styles._container}>
                    <div className={styles._containerCostAndRating}>
                        <div className={styles._costWrapper}>
                            <span className={styles._currentConst}>
                                ${currentCost}
                            </span>

                            {oldCost &&(
                                <span className={styles._oldCost}>
                                    ${oldCost}
                                </span>
                            )}

                        </div>
                        <RatingStars rating={+rating} type='small'/>
                    </div>
                    
                    <div className={styles._buttonCart}
                         onClick={(e)=>addToCart(id,e)}>

                        <Button className='ButtonTransparent' 
                                icon={<CartIcon className={styles._buttonCartIcon}/>}
                                type='button'
                                disabled={!isStockStatus}/>
                    </div>
                    
                </div>
            </div>
        </NavLink>
    )
}

export default ProductsCard;

