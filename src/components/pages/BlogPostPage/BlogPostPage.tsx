import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import BlogPostHeader from '../../organisms/pages/blogPostPage/BlogPostHeader/BlogPostHeader';
import BlogPostDetail from '../../organisms/pages/blogPostPage/BlogPostDetail/BlogPostDetail';
import BlogPostBannerSummerSale from '../../molecules/banner/blogPostPage/BlogPostBannerSummerSale/BlogPostBannerSummerSale';
import BlogPostLeaveComment from '../../organisms/pages/blogPostPage/BlogPostLeaveComment/BlogPostLeaveComment';
import BlogPostComments from '../../organisms/pages/blogPostPage/BlogPostComments/BlogPostComments';

import styles from '../BlogPostPage/BlogPostPage.module.scss';

const BlogPostPage:React.FC = () => {

    const location  = useLocation()
    const data = location.state.data

    useEffect(()=>{window.scrollTo({top: 0})},[data]);

    return (
        <div className={styles.BlogPostPage}>
            <div className='center'>
                <BlogPostHeader data={data}/>
                <BlogPostDetail id={data.id}/>

                <BlogPostBannerSummerSale/>

                <BlogPostLeaveComment/>

                <BlogPostComments/>
            </div>

        </div>
    )
}

export default BlogPostPage;