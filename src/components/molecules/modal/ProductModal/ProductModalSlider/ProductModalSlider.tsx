import useSlider from '../../../../../hooks/useSlider';

import styles from '../ProductModalSlider/ProductModalSlider.module.scss';

interface ProductModalSliderProps{
    src:string
}

const ProductModalSlider:React.FC<ProductModalSliderProps> = ({src}) => {

    const images = Array.from({length:5}, ()=>src);
    console.log(images)

    const renderImages = ()=>{
        return images.map((item,i)=>{
           return(
           <img alt='Product image' 
                        src={item} 
                        key={i} 
                        className={styles._image}/>
                    )

        })
    }


    const useSlicer = useSlider({ 
                                cards: renderImages(),
                                styles: '',
                                slidesToShow: 4,
                                vertical:true,
    });

    return (
        <div className={styles.ProductModalSlider}>
            {useSlicer}
        </div>
    )
}

export default ProductModalSlider;