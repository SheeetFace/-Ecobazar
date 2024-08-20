import { NavLink } from 'react-router-dom';

import DateLabel from '../../../atoms/blogCard/DateLabel/DateLabel';
import Info from './components/Info/Info';

import  styles from '../BlogCard/BlogCard.module.scss';

import type { BlogDataTypes as BlogCardProps} from '../../../../types/blog/blogDataTypes';

const BlogCard:React.FC<BlogCardProps> = (props) => {

    const {id,category, owner,commentsCount,title,date,src} =  props

    return (
        <section className={styles.BlogCard}>
            <div className={styles._containerCard}>
                <div className={styles._imgWrapper}
                    role="group"
                    aria-labelledby={`blog-description-${title}`}>
                    <figure>
                        <img src={src} 
                            alt={title}
                            loading='lazy'
                            width='482'
                            height='556'
                        />
                    </figure>
                    
                    <div className={styles._date}>
                        <DateLabel date={date}/>
                    </div>
                </div>

                <div className={styles._info}>
                    <Info count={commentsCount} category={category} owner={owner}/>
                    <figcaption id={`blog-description-${title}`}>
                        <span className={styles._title}>{title}</span>
                    </figcaption>
                        <NavLink    to={`/blog/${title}#${id}`}
                                    state={{data:props}}
                                    className='_navLinkGreenPrimaryLetterSpacing'
                                    aria-label={`Read more about ${title}`}>
                                Read More &#10132;
                        </NavLink>
                </div>
            </div>
        </section>
    )
}

export default BlogCard;