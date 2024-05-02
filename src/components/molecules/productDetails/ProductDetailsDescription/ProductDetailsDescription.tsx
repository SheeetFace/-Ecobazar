import SocialMediaIcons from '../../SocialMediaIcons/SocialMediaIcons';
import FoodCoIcon from '../../../atoms/icon/brand/FoodCoIcon';


import styles from '../ProductDetailsDescription/ProductDetailsDescription.module.scss';

interface ProductDetailsDescriptionProps{
    description:string
}

const ProductDetailsDescription:React.FC<ProductDetailsDescriptionProps> = ({description}) => {

    return (
        <div className={styles.ProductDetailsDescription}>
            <div className={styles._header}>
                <div className={styles._brand}>
                    <span>Brand:</span>
                    <FoodCoIcon className={styles._brandIcon}/>
                </div>

                <div className={styles._share}> 
                    Share Item:<SocialMediaIcons/>
                </div>
                
            </div>

            <span className={styles._description}>{description}</span>
        </div>
    )
}

export default ProductDetailsDescription;