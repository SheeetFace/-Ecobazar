import { NavLink } from 'react-router-dom';

import RatingStars from '../../RatingStars/RatingStars';

import styles from '../SaleProductCard/SaleProductCard.module.scss';

interface SaleProductCardProps{
    name:string
    id:string
    src:string
    currentCost:string
    oldCost:string
    rating:string
}

const SaleProductCard:React.FC<SaleProductCardProps> = ({name,id,src,currentCost,oldCost,rating}) => {
    console.log(id)
    return (
        <NavLink to={`${name}`} className='_navLink'>
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