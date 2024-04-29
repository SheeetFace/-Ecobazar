import SocialMediaIcons from '../../../SocialMediaIcons/SocialMediaIcons';
import FoodCoIcon from '../../../../atoms/icon/brand/FoodCoIcon';


import styles from '../ProductModalDescription/ProductModalDescription.module.scss';

interface ProductModalDescriptionProps{
    description:string
}

const ProductModalDescription:React.FC<ProductModalDescriptionProps> = ({description}) => {

    return (
        <div className={styles.ProductModalDescription}>
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

export default ProductModalDescription;