import LabelBadge from '../../../atoms/LabelBadge/LabelBadge';
import RatingStars from '../../RatingStars/RatingStars';

import styles from '../PopularProductsCard/PopularProductsCard.module.scss';

interface PopularProductsCardProps{
    name:string,
    id:string,
    src:string,
    currentCost:string,
    oldCost:string,
    sale:string,
    rating:string,
}

const PopularProductsCard:React.FC<PopularProductsCardProps> = ({name,id,src,currentCost,oldCost,sale,rating}) => {

    //href - vegetable/id---
    return (
        <div className={styles.PopularProductsCard}>

            {sale ?  <LabelBadge className={styles._label} label={`Sale ${sale}`}/> :null}
            <img src={src} alt={name}/>

            <span className={styles._name}>{name}</span>

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
    )
}

export default PopularProductsCard;