import { useMemo } from 'react';

import useApiResource from '../../../../../../hooks/useApiResource';
import { useGetLatestBlogsQuery } from '../../../../../../api/blogs/latestBlogsApi';

import RecentlyAddedBlogCard from '../../../../../molecules/card/RecentlyAddedBlogCard/RecentlyAddedBlogCard';

import styles from '../RecentlyAdded/RecentlyAdded.module.scss';

import type { BlogDataTypes } from '../../../../../../types/blogDataTypes';


const RecentlyAdded:React.FC = () => {

    const {responseData, content} = useApiResource<BlogDataTypes>(useGetLatestBlogsQuery, 'latestBlogs');

    const renderRecentlyBlogs=useMemo(()=>{
        if(responseData){
            return responseData.map((item)=>{
                return <RecentlyAddedBlogCard   key={item.id}
                                                title={item.title}
                                                src={item.src}
                                                date={item.date}
                                                id={item.id}
                        />
            })
        }
    },[responseData])

    return (
        <div className={styles.RecentlyAdded}>
            <h1>Recently Added</h1>
            {content}
            {renderRecentlyBlogs}
        </div>
    )
}

export default RecentlyAdded;