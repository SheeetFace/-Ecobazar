import useSlider from '../../../../../hooks/useSlider';

import StepsIcon from '../../../../atoms/icon/brand/StepsIcon';
import MangoIcon from '../../../../atoms/icon/brand/MangoIcon';
import FoodNetIcon from '../../../../atoms/icon/brand/FoodNetIcon';
import FoodCoIcon from '../../../../atoms/icon/brand/FoodCoIcon';
import BookOffIcon from '../../../../atoms/icon/brand/BookOffIcon';
import GSeriesIcon from '../../../../atoms/icon/brand/GSeriesIcon';

import styles from '../Brand/Brand.module.scss';

import { brandSliderConfig } from '../../../../../config/slider/brandSliderConfig';

const Brand:React.FC = () => {

    const icons =  [<StepsIcon/>,<MangoIcon/>,<FoodNetIcon/>,<FoodCoIcon/>,<BookOffIcon/>,<GSeriesIcon/>]

    const renderBrandCards =()=>{
        return icons.map((item,i)=>{
            return(
                <div key={i}> 
                    {item}
                </div>
            )
        })
    }

    const slider = useSlider({
        cards:renderBrandCards(),
        styles:'',
        slidesToShow:5,
        dots:false,
        responsiveSetting:brandSliderConfig,
        isSliderShow:true,
        cardsWithoutSliderStyles:styles._cards
    })

    return (
        <section className={styles.Brand}>
            <div className='center'>
                <div>{slider}</div>
            </div>
        </section>
    )
}

export default Brand;