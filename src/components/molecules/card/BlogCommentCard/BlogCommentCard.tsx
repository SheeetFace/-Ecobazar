import { formatDate } from '../../../../utils/formatDate';

import styles from '../BlogCommentCard/BlogCommentCard.module.scss';

interface BlogCommentCardProps{
    id:string
    name:string
    date: string
    message:string
    src:string
}

const BlogCommentCard:React.FC<BlogCommentCardProps> = ({id,name,date,message,src}) => {

    const formattedDate = formatDate(date,'normal')

    return (
        <div className={styles.BlogCommentCard}>
            <img alt={name} src={src}/> 

            <div className={styles._container}>
                <div className={styles._header}>
                    <span className={styles._name}>{name}</span>
                    <span>•</span>
                    <span className={styles._date}>{formattedDate}</span>
                </div>

                <div className={styles._message}>
                    <span>{message}</span>
                </div>
            </div>

        </div>
    )
}

export default BlogCommentCard;