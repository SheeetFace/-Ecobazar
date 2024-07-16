import { NavLink } from 'react-router-dom';

import RatingStars from '../../RatingStars/RatingStars';

import styles from '../SaleProductCard/SaleProductCard.module.scss';

import type { ProductDataType as SaleProductCardProps } from '../../../../types/productDataTypes';

const SaleProductCard:React.FC<SaleProductCardProps> = (props) => {

    const {name,src,currentCost,oldCost,rating} = props

    return (
        <NavLink to={`/shop/${name}`}
                 state={{data:props}} 
                 className="_navLink">

            <div className={styles.SaleProductCard}>
                <img alt={name} src={src}/>
                
                <div className={styles._container}>
                    <span className={styles._name}>{name}</span>
                    <div className={styles._costs}>
                        <span >{currentCost}</span>
                        <span className={styles._old}>{oldCost}</span>
                    </div>
                    <RatingStars rating={+rating} type='small'/>
                </div>
            </div>
        </NavLink>
    )
}

export default SaleProductCard;