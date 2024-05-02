import useSlider from '../../../../hooks/useSlider';

import styles from '../ProductDetailsSlider/ProductDetailsSlider.module.scss';

interface ProductDetailsSliderProps{
    src:string
}

const ProductDetailsSlider:React.FC<ProductDetailsSliderProps> = ({src}) => {

    const images = Array.from({length:4}, ()=>src);

    const filters =[
        styles._filter1,
        styles._filter2,
        styles._filter3,
        styles._filter4,
    ]

    const renderImages = ()=>{
        return images.map((item,i)=>{
           return(
            <div className={styles._imageItem} key={i}>
                <img alt='Product image' 
                    src={item} 
                    className={`${styles._image} ${filters[i+1]}`}/>
            </div>
            )
        })
    }

    const useSlicer = useSlider({ 
                                cards: renderImages(),
                                styles: '',
                                slidesToShow: 3,
                                vertical:true,
                                dots:true,
                                pauseOnHover:false,
                                swipe:false
    });

    return (
        <div className={styles.ProductDetailsSlider}>
            {useSlicer}
        </div>
    )

}

export default ProductDetailsSlider;
