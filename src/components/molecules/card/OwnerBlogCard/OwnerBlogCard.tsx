import ownerPic from '../../../../assets/persons/teams/team2.webp'

import { formatDate } from '../../../../utils/formatDate';

import styles from '../OwnerBlogCard/OwnerBlogCard.module.scss';

interface OwnerBlogCardProps{
    date:string
}

const OwnerBlogCard:React.FC<OwnerBlogCardProps> = ({date}) => {

    const formattedDate = formatDate(date,'normal')

    return (
        <section className={styles.OwnerBlogCard}>
            <img alt='Owner Picture' src={ownerPic} />

            <div className={styles._container}>
                <span className={styles._ownerName}>Jenny Wilson</span>

                <div className={styles._dateAndSpentTime}>
                    <span>{formattedDate}</span>
                    <span>•</span>
                    <span>6 min read</span>
                </div>
            </div>
        </section>
    )
}

export default OwnerBlogCard;