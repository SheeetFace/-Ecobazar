import { useMemo } from 'react';
import { useGetLatestBlogsQuery } from '../../../../../api/blogs/latestBlogsApi';

import { useLazyLoadResource } from '../../../../../hooks/api/useLazyLoadResource';
import useSlider from '../../../../../hooks/useSlider';

import BlogCard from '../../../../molecules/card/BlogCard/BlogCard';

import styles from '../LatestNews/LatestNews.module.scss';


import type { BlogDataTypes } from '../../../../../types/blog/blogDataTypes';

import { latestNewsSliderConfig } from '../../../../../config/slider/latestNewsSliderConfig';

const LatestNews:React.FC = () => {

    const { ref, responseData, content } = useLazyLoadResource<BlogDataTypes>({
        query: useGetLatestBlogsQuery,
        typeResource: 'latestBlogs'
    })
    
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

    const slider = useSlider({
        cards:renderLatesNews,
        styles:'',
        slidesToShow:3,
        dots:true,
        responsiveSetting:latestNewsSliderConfig,
        isSliderShow:true,
        cardsWithoutSliderStyles:styles._cards
    })

    return (
        <section className={styles.LatestNews} ref={ref}>
            <div className='center'>
                <span className={styles._title}>Latest News</span>
                <div className={styles._cards}>
                    {content}
                    {slider}
                </div>
            </div>
        </section>
    )
}

export default LatestNews;
