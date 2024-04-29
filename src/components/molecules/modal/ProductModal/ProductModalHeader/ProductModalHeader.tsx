import LabelBadge from '../../../../atoms/LabelBadge/LabelBadge';
import RatingStars from '../../../RatingStars/RatingStars';

import styles from '../ProductModalHeader/ProductModalHeader.module.scss';

interface ProductModalHeaderProps{
    name:string
    currentCost:string,
    oldCost:string,
    sale:string,
    rating:string,
    stockStatus:string
}

const ProductModalHeader:React.FC<ProductModalHeaderProps> = ({name,currentCost,oldCost,sale,rating,stockStatus}) => {

    const stockStatusBoolean = !!(+stockStatus);
    const stockStatusClass = stockStatusBoolean ? styles._labelBadgeInStock : styles._labelBadgeOutOfStock

    return (
        <div className={styles.ProductModalHeader}>
            <div className={styles._title}>
                <h2>{name}</h2>
                <LabelBadge label={stockStatusBoolean ? 'In Stock' :'Out of Stock'}
                            className={stockStatusClass}
                />
            </div>
            

            <div className={styles._info}>
                <RatingStars rating={+rating} type='big'/>
                <span> 4 Review</span>
                <span>•</span>
                <span className={styles._sku}>SKU:</span>
                <span>2,51,594</span>
            </div>

            <div className={styles._price}>
                {oldCost 
                    ?
                        <span className={styles._oldCost}>${oldCost}</span>
                    :
                null}
                
                <span>${currentCost}</span>

                {sale 
                    ?
                        <LabelBadge label={`${sale} Off`}
                                    className={styles._labelSale}
                        />
                    :
                null}
            </div>
        </div>
    )
}

export default ProductModalHeader;