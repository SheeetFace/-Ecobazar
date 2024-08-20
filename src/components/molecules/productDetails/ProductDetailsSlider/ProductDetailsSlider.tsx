import useSlider from '../../../../hooks/useSlider';

import styles from '../ProductDetailsSlider/ProductDetailsSlider.module.scss';

interface ProductDetailsSliderProps{
    src:string
}

import { productDetailsSliderConfig } from '../../../../config/slider/productDetailsSliderConfig';

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

    const slider = useSlider({
        cards:renderImages(),
        styles:'',
        slidesToShow:3,
        dots:true,
        swipe:false,
        vertical:true,
        responsiveSetting:productDetailsSliderConfig,
        isSliderShow:true,
        cardsWithoutSliderStyles:styles._cards
    })

    return (
        <div className={styles.ProductDetailsSlider}>
            {slider}
        </div>
    )

}

export default ProductDetailsSlider;
