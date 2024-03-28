import CommentsIcon from '../../icon/info/CommentsIcon';

import styles from '../CommentsCount/CommentsCount.module.scss';

interface CommentsCountProps{
    count:string
}

const CommentsCount:React.FC<CommentsCountProps> = ({count}) => {

    return (
        <div className={styles.CommentsCount}>
            <CommentsIcon className=''/>
            <span>{count}</span>
            <span>Comments</span>
        </div>
    )
}

export default CommentsCount;