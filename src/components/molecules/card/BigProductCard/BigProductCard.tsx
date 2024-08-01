import { NavLink } from 'react-router-dom';

import LabelBadge from '../../../atoms/LabelBadge/LabelBadge';
import ButtonWishlist from '../components/ButtonWishlist/ButtonWishlist';
import ButtonAddToCart from '../../button/ButtonAddToCart/ButtonAddToCart';
import ButtonQuickView from '../components/ButtonQuickView/ButtonQuickView';
import RatingStars from '../../RatingStars/RatingStars';
import Timer from '../../pages/mainPage/Timer/Timer';


import styles from '../BigProductCard/BigProductCard.module.scss';

import type  { ProductDataType as BigProductCardProps } from '../../../../types/product/productDataTypes';


const BigProductCard:React.FC<BigProductCardProps> = (props) => {

    const {name, id, src, currentCost, oldCost, sale, rating, stockStatus} = props; 

    const isStockStatus = +stockStatus > 0;

    return (
        <NavLink to={`/shop/${name}`} state={{data:props}} className="_navLink">
            <div className={styles.BigProductCard}
                  role="group" 
                  aria-labelledby={`product-description-${name}`}>
                <div className={styles._img}>
                    <div className={styles._wrapperLabels}>
                        <LabelBadge label='Best Sale' className={styles._bestSale}/>
                        <LabelBadge label={`Sale${sale}`} className={styles._saleDiscount}/>
                    </div>
                    <figure >
                        <img alt={name} 
                            src={src}
                            loading='lazy'
                            width='280'
                            height='280'
                        />
                    </figure>
                </div>

                <div className={styles._buttonsWrapper}>
                    <ButtonWishlist id={id} type='card' ariaLabel={`Add ${name} to wishlist`}/>
                    <ButtonAddToCart    id={id}
                                        isStockStatus={isStockStatus}
                                        isText={true}
                                        ariaLabel={`Add ${name} To Cart`}/>
                    <ButtonQuickView {...props}/>
                </div>

                <div className={styles._wrapperInfo}>
                    <figcaption id={`product-description-${name}`}>
                        <span className={styles._name}>{name}</span>
                    </figcaption>
                    <div className={styles._cost}>
                        <span>${currentCost}</span>
                        <span className={styles._old}>{oldCost}</span>
                    </div>
                    
                    <RatingStars rating={+rating} type='big'/>
                </div>
                <div className='center'>
                    <span className={styles._hurryUp}>Hurry up! Offer ends In:</span>
                    <Timer color='black'/>
                </div>
            </div>
        </NavLink>
    )
}

export default BigProductCard;