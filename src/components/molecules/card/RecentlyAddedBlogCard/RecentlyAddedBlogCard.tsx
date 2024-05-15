import { formatDate } from '../../../../utils/formatDate';

import CalendarIcon from '../../../atoms/icon/info/CalendarIcon';

import styles from '../RecentlyAddedBlogCard/RecentlyAddedBlogCard.module.scss';

interface RecentlyAddedBlogCardProps{
    date:string
    src:string
    title:string
    id:string
}

const RecentlyAddedBlogCard:React.FC<RecentlyAddedBlogCardProps>=({date,src,title,id})=>{

    const formattedDate = formatDate(date,'normal')

    return (
        <div className={styles.RecentlyAddedBlogCard}>
            <img src={src} 
                 alt={title}
            />

            <div className={styles._container}>
                <span className={styles._title}>{title}</span>

                <div className={styles._date}>
                    <CalendarIcon/>
                    <span>{formattedDate}</span>
                </div>
            </div>

        </div>
    )
}

export default RecentlyAddedBlogCard;