import RatingStars from '../../../RatingStars/RatingStars';

import styles from '../RatingItem/RatingItem.module.scss';

interface RatingItemProps{
    rating:number
    fn:()=>void
    isChecked:boolean
}

const RatingItem:React.FC<RatingItemProps> = ({rating,fn, isChecked}) => {

    return (
        <div className={styles.RatingItem}>

            <input className={styles._checkbox} 
                    name="ratings"
                    type='checkbox'
                    onClick={()=>fn()}
                    checked={isChecked}
            />
            <div className={styles._rating}>
                    <RatingStars rating={rating} type='big' />
                    <span>{rating !== 5 ? rating + '.0 & up' : rating + '.0'}</span>
            </div>

        </div>
    )
}

export default RatingItem;