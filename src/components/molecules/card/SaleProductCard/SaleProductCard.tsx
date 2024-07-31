import { NavLink } from 'react-router-dom';

import RatingStars from '../../RatingStars/RatingStars';

import styles from '../SaleProductCard/SaleProductCard.module.scss';

import type { ProductDataType as SaleProductCardProps } from '../../../../types/product/productDataTypes';

const SaleProductCard:React.FC<SaleProductCardProps> = (props) => {

    const {name,src,currentCost,oldCost,rating} = props

    return (
        <NavLink to={`/shop/${name}`}
                 state={{data:props}} 
                 className="_navLink">

            <div className={styles.SaleProductCard} 
                 role="group" 
                 aria-labelledby={`product-description-${name}`}>

                <figure>
                    <img alt={name}
                         src={src}
                         width='70'
                         height='70'
                         loading="lazy"
                    />
                </figure>

                <div className={styles._container}>
                    <figcaption id={`product-description-${name}`}
                                className={styles._name}>
                        {name}
                    </figcaption>

                    <div className={styles._costs}>
                        <span>{currentCost}</span>
                        <span className={styles._old}>{oldCost}</span>
                    </div>
                    <RatingStars rating={+rating} type='small'/>
                </div>
            </div>

        </NavLink>
    )
}

export default SaleProductCard;


