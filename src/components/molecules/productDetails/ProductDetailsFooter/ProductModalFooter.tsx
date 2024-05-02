import styles from '../ProductDetailsFooter/ProductDetailsFooter.module.scss';

interface ProductDetailsFooterProps{
    category:string
    tag:string[]
}

const ProductDetailsFooter:React.FC<ProductDetailsFooterProps> = ({category,tag}) => {

    return (
        <div className={styles.ProductDetailsFooter}>
            <div>
                <span> Category: 
                    <span className={styles._items}>{category}</span>
                </span>
            </div>
            <div>
                <span> Tag: 
                    <span className={styles._items}>{tag.join(' • ')}</span>
                </span>
            </div>
            
        </div>
    )
}

export default ProductDetailsFooter;