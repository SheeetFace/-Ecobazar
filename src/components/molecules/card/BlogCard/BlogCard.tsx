import { NavLink } from 'react-router-dom';

import DateLabel from '../../../atoms/blogCard/DateLabel/DateLabel';
import Info from './components/Info/Info';

import  styles from '../BlogCard/BlogCard.module.scss';

import type { BlogDataTypes as BlogCardProps} from '../../../../types/blogDataTypes';

const BlogCard:React.FC<BlogCardProps> = (props) => {

    const {id,category, owner,commentsCount,title,date,src} =  props

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
                    <NavLink    to={`/blog/${title}`}
                                state={{data:props}}
                                className='_navLinkGreenPrimaryLetterSpacing'>
                            Read More &#10132;
                    </NavLink>
                    
                </div>
            </div>
            

        </div>
    )
}

export default BlogCard;