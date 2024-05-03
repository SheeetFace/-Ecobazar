import RatingStars from '../../RatingStars/RatingStars';
import Divider from '../../../atoms/Divider/Divider';

import styles from '../ProductFeedbackCard/ProductFeedbackCard.module.scss';

interface ProductFeedbackCardProps{
    id:string
    name:string
    avatar:string
    rating:string
    date:number
    feedback:string
}

const ProductFeedbackCard:React.FC<ProductFeedbackCardProps> = ({id,name,avatar,rating,date,feedback}) => {

    const newDate = date ? (new Date(date).toLocaleDateString()):null;

    return (
        <div className={styles.ProductFeedbackCard}>
            <div className={styles._container}>
                <div className={styles._customerAndRating}>
                    <img alt={name} src={avatar}/>
                    <div>
                        <span className={styles._name}>{name}</span>
                        <RatingStars rating={+rating} type='small'/>
                    </div>
                </div>
                <span className={styles._date}>{newDate}</span>
            </div>

            <span className={styles._feedback}>{feedback}</span>
          
            <Divider type='horizontal' className={styles._divider}/>
        </div>
    )
}

export default ProductFeedbackCard;