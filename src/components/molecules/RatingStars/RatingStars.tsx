import RatingStar from '../../atoms/RatingStar/RatingStar';

import styles from '../RatingStars/RatingStars.module.scss';

type RatingStars= 'big'|'small'
interface RatingStarsProps{
    rating:number
    type:RatingStars
}

const RatingStars:React.FC<RatingStarsProps> = ({rating,type}) => {

    const size = type === 'big' ? styles._big : styles._small;

    const renderRatingStars =()=>{
        return [1,2,3,4,5].map((item,i)=>{
            const color = item <=rating ?styles._fill : styles._empty
            return(
                <RatingStar color={color} key={i}/>
            )
        })
    }

    return (
        <div className={`${styles.RatingStars} ${size}`}>
            {renderRatingStars()}
        </div>
    )
}

export default RatingStars;