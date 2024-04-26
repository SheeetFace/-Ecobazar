import RatingStars from '../../../RatingStars/RatingStars';

import styles from '../ProductModalHeader/ProductModalHeader.module.scss';

interface ProductModalHeaderProps{
    name:string
    currentCost:string,
    oldCost:string,
    sale:string,
    rating:string,
}

const ProductModalHeader:React.FC<ProductModalHeaderProps> = ({name,currentCost,oldCost,sale,rating}) => {

    return (
        <div className={styles.ProductModalHeader}>
            <h2>{name}</h2>

            <div className={styles._info}>
                <RatingStars rating={+rating} type='big'/>
                <span> 4 Review</span>
                <span>•</span>
                <span>SKU: 2,51,594</span>
            </div>

        </div>
    )
}

export default ProductModalHeader;