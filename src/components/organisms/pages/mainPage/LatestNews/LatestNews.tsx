import BlogCard from '../../../../molecules/card/BlogCard/BlogCard';

import { latestNews } from '../../../../../data/temp/latestNews';

import styles from '../LatestNews/LatestNews.module.scss';

interface LatestNewsItem{
    id:string,
    category:string,
    owner:string,
    commentsCount:string,
    title:string,
    date:string,
    src:string,
}

const LatestNews:React.FC = () => {

    const renderLatesNews = ()=>{
        return latestNews.map((item:LatestNewsItem,i)=>{
            return(
                <BlogCard  id={item.id}
                                category={item.category}
                                owner={item.owner}
                                commentsCount={item.commentsCount}
                                title={item.title}
                                date={item.date}
                                src={item.src}
                                key={i}
                />
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