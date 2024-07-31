import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import LabelBadge from '../../../atoms/LabelBadge/LabelBadge';
import RatingStars from '../../RatingStars/RatingStars';
import ButtonAddToCart from '../../button/ButtonAddToCart/ButtonAddToCart';
import ButtonWishlist from '../components/ButtonWishlist/ButtonWishlist';
import ButtonQuickView from '../components/ButtonQuickView/ButtonQuickView';

import styles from '../ProductCard/ProductCard.module.scss';

import type { ProductDataType as ProductsCardProps} from '../../../../types/product/productDataTypes';


const ProductsCard:React.FC<ProductsCardProps> = (props) => {

    const {name, id, src, currentCost, oldCost, sale, rating,stockStatus} = props;

    const isStockStatus = +stockStatus > 0;

    const { ref, inView} = useInView({
        threshold: .3,
        triggerOnce:true
    });

    return (
        <NavLink to={`/shop/${name}#${props.id}`}
                 state={{data:props}} 
                 className="_navLink">

            <div className={styles.ProductsCard} ref={ref}>

            {!isStockStatus && (
                <div className={styles._isOutOfStock}>
                    <LabelBadge className={styles._labelOutOfStock} label='Out of Stock'/>
                </div>
            )}
                {sale &&  <LabelBadge className={styles._label} label={`Sale ${sale}`}/>}

                {inView && 
                    <div className={styles._topButtonsContainer}>
                        <ButtonWishlist type='card' id={id} ariaLabel={`Add ${name} to Wishlist`}/>
                        <ButtonQuickView {...props}/>
                    </div>
                }
                
                {inView ? 
                    (<figure className={styles._imgContainer}>
                        <div className={styles._imgBackground}>
                            <img
                                loading="lazy"
                                src={src}
                                alt={name}
                                width="185"
                                height="185"
                                className={styles.productImage}
                            />
                        </div>
                        <figcaption className={styles._name}>
                            <span>{name}</span>
                        </figcaption>
                    </figure>)
                : 
                    (<div className={styles._imgSkeleton}></div>)
                }
                
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
                    
                    <div className={styles._buttonCart}>
                        <ButtonAddToCart    id={id}
                                            isStockStatus={isStockStatus}
                                            isIcon={true}
                                            isText={false}
                                            isBadge={true}
                                            classNameIcon={styles._buttonCartIcon}
                                            ariaLabel={`Add ${name} To Cart`}/>
                    </div>

                </div>
            </div>
        </NavLink>
    )
}

export default ProductsCard;

