import useSlider from '../../../../../hooks/useSlider';

import StepsIcon from '../../../../atoms/icon/brand/StepsIcon';
import MangoIcon from '../../../../atoms/icon/brand/MangoIcon';
import FoodNetIcon from '../../../../atoms/icon/brand/FoodNetIcon';
import FoodCoIcon from '../../../../atoms/icon/brand/FoodCoIcon';
import BookOffIcon from '../../../../atoms/icon/brand/BookOffIcon';
import GSeriesIcon from '../../../../atoms/icon/brand/GSeriesIcon';

import styles from '../Brand/Brand.module.scss';

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

    const Slider = useSlider({
        cards:renderBrandCards(),
        styles:'',
        slidesToShow:5,
        dots:false,
    })

    return (
        <section className={styles.Brand}>
            <div className='center'>
                <div>{Slider}</div>
            </div>
        </section>
    )
}

export default Brand;