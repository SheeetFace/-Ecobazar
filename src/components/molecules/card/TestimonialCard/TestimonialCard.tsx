import QuotesIcon from '../../../atoms/icon/info/QuotesIcon';

import RatingStars from '../../RatingStars/RatingStars';

import styles from '../TestimonialCard/TestimonialCard.module.scss';

interface TestimonialCardProps {
    id:string
    name:string,
    avatar:string
    testimonial:string
    rating:string
}

const TestimonialCard:React.FC<TestimonialCardProps> = ({name,avatar, testimonial,rating}) => {

    return (
        <div className={styles.TestimonialCard}>
            <QuotesIcon className=''/>
            <span className={styles._testimonial}>{testimonial}</span>

            <div className={styles._container}>
                <div className={styles._customerInfo}>
                    <img alt={name} src={avatar}/>
                    <div className={styles._wrapper}>
                        <span className={styles._name}>{name}</span>
                        <span className={styles._customer}>Customer</span>
                    </div>
                </div>
                <RatingStars rating={+rating} type='small'/>
            </div>
        </div>
    )
}

export default TestimonialCard;