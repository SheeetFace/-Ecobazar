import { useEffect, useState } from "react";

import Zoom from "react-img-zoom-gdn";

import styles from '../ProductImageZoom/ProductImageZoom.module.scss';

const ProductImageZoom: React.FC<{ src:string, name:string }> = ({ src,name }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const mediaQuery = window.matchMedia('(max-width: 575.98px)');

        const handleResize =()=>{
            setIsMobile(mediaQuery.matches)
        }

        handleResize()

        mediaQuery.addEventListener('change', handleResize);

        return ()=>{ mediaQuery.removeEventListener('change', handleResize) }
    },[])

    return (
        <div className={styles.ProductImageZoom}>
            {!isMobile ?
                <Zoom img={src} zoomScale={1.5} width={400} height={400} alt={name} key={src}/>
                : 
                <img src={src} alt={name} className={styles._img} />
            }
        </div>
    )
}

export default ProductImageZoom;