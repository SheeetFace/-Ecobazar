import RatingStars from '../../../RatingStars/RatingStars';

import styles from '../RatingItem/RatingItem.module.scss';

interface RatingItemProps{
    rating:number
    fn:()=>void
}

const RatingItem:React.FC<RatingItemProps> = ({rating,fn}) => {

    return (
        <div className={styles.RatingItem}>

            <input className={styles._radio} 
                    name="ratings"
                    type='checkbox'
                    onClick={()=>fn()}
            />
            <div className={styles._rating}>
                    <RatingStars rating={rating} type='big' />
                    <span>{rating !== 5 ? rating + '.0 & up' : rating + '.0'}</span>
            </div>

        </div>
    )
}

export default RatingItem;