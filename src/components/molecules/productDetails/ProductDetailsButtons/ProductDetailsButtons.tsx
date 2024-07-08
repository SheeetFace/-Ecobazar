import ButtonAddToCart from '../../button/ButtonAddToCart/ButtonAddToCart';
import ButtonWishlist from '../../card/components/ButtonWishlist/ButtonWishlist';
import Quantity from '../../card/components/Quantity/Quantity';

import styles from '../ProductDetailsButtons/ProductDetailsButtons.module.scss';


interface ProductDetailsButtonsProps{
    id:string
    isStockStatus:boolean
}

const ProductDetailsButtons:React.FC<ProductDetailsButtonsProps> = ({id,isStockStatus}) => {

    return (
        <div className={styles.ProductDetailsButtons}>
            <Quantity />
            <ButtonWishlist id={id} type='card'/>

            <ButtonAddToCart id={id} isStockStatus={isStockStatus}/>
        </div>
    )
}

export default ProductDetailsButtons;