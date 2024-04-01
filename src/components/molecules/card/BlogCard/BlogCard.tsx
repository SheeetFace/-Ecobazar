import DateLabel from '../../../atoms/blogCard/DateLabel/DateLabel';
import Info from './components/Info/Info';
import Button from '../../../atoms/Button/Button';

import  styles from '../BlogCard/BlogCard.module.scss';

interface BlogCardProps{
    id:string,
    category:string,
    owner:string,
    commentsCount:string,
    title:string,
    date:string,
    src:string,
}

const BlogCard:React.FC<BlogCardProps> = ({id,category, owner,commentsCount,title,date,src}) => {

    return (
        <div className={styles.BlogCard}>
            <div className={styles._imgWrapper}>
                <img loading='lazy' alt={title} src={src}/>

                <div className={styles._date}>
                    <DateLabel date={date}/>
                </div>
            </div>

            <div className={styles._info}>
                <Info count={commentsCount} category={category} owner={owner}/>
                <span className={styles._title}>{title}</span>
                <div className={styles._button}>
                    <Button className='ButtonTransparent colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
                </div>
            </div>
            

        </div>
    )
}

export default BlogCard;