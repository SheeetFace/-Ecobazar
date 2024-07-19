import { useMemo } from 'react';

import { useGetLatestBlogsQuery } from '../../../../../api/blogs/latestBlogsApi';

import useApiResource from '../../../../../hooks/useApiResource';

import BlogCard from '../../../../molecules/card/BlogCard/BlogCard';

import styles from '../LatestNews/LatestNews.module.scss';


import type { BlogDataTypes } from '../../../../../types/blogDataTypes';
//!intersection observer //! clear blogs filter  //! fix lidl recent blog card

const LatestNews:React.FC = () => {

    const {responseData, content} = useApiResource<BlogDataTypes>(useGetLatestBlogsQuery, 'latestBlogs');
    
    const renderLatesNews = useMemo(()=>{ 

        if(responseData){
            return responseData.map((item,i)=>{
                return(
                    <div className={styles._card} key={i}>
                        <BlogCard  key={item.id} {...item}/>
                    </div>
                )
            })
        }

    },[responseData])

    return (
        <section className={styles.LatestNews}>
            <div className='center'>
                <span className={styles._title}>Latest News</span>

                <div className={styles._cards}>
                    {content}
                    {renderLatesNews}
                </div>
            </div>
        </section>
    )
}

export default LatestNews;