import BlogCard from '../../../../molecules/card/BlogCard/BlogCard';

import { subFilterDate } from '../../../../../utils/filter/subFilters/subFilterDate';

import { blogsData } from '../../../../../data/temp/blogsData';

import styles from '../LatestNews/LatestNews.module.scss';


import type { BlogDataTypes } from '../../../../../types/blogDataTypes';

const LatestNews:React.FC = () => {
    
    const renderLatesNews = ()=>{                       //!memo
        const data = subFilterDate(blogsData, 'newest').slice(0,3) as BlogDataTypes[];

        return data.map((item,i)=>{       //! data from api
            return(
                <div className={styles._card} key={i}>
                    <BlogCard  key={item.id} {...item}/>
                </div>
            )
        })
    }

    return (
        <section className={styles.LatestNews}>
            <div className='center'>
                <span className={styles._title}>Latest News</span>

                <div className={styles._cards}>
                    {renderLatesNews()}
                </div>
            </div>
        </section>
    )
}

export default LatestNews;