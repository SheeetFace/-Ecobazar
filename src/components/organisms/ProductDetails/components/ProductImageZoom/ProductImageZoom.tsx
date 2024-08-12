import { ImageZoom } from 'react-responsive-image-zoom';

import styles from '../ProductImageZoom/ProductImageZoom.module.scss';

const ProductImageZoom: React.FC<{ src:string, name:string }> = ({ src,name }) => {

    return (
        <div className={styles.ProductImageZoom}>
            <ImageZoom  src={src} 
                        alt={name}
                        defaultZoomFactor={1.5}
            />
        </div>
    )

}

export default ProductImageZoom;