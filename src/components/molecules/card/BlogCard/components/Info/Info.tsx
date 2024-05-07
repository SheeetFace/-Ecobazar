import Category from '../../../../../atoms/blogCard/Category/Category';
import Owner from '../../../../../atoms/blogCard/Owner/Owner';
import CommentsCount from '../../../../../atoms/blogCard/CommentsCount/CommentsCount';


import styles from '../Info/Info.module.scss';

interface InfoProps{
    count:string
    category:string
    owner:string
}

const Info:React.FC<InfoProps> = ({count,category, owner}) => {

    return (
        <div className={styles.Info}>
            <Category category={category}/>
            <Owner owner={owner}/>
            <CommentsCount count={count}/>
        </div>
    )
}

export default Info;