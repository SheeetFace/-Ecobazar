import styles from '../ProductModalFooter/ProductModalFooter.module.scss';

interface ProductModalFooterProps{
    category:string
    tag:string[]
}

const ProductModalFooter:React.FC<ProductModalFooterProps> = ({category,tag}) => {

    return (
        <div className={styles.ProductModalFooter}>
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

export default ProductModalFooter;