import { useLocation } from 'react-router-dom';

import BlogPostHeader from '../../organisms/pages/blogPostPage/BlogPostHeader/BlogPostHeader';
import BlogPostDetail from '../../organisms/pages/blogPostPage/BlogPostDetail/BlogPostDetail';
import BlogPostBannerSummerSale from '../../molecules/banner/blogPostPage/BlogPostBannerSummerSale/BlogPostBannerSummerSale';

import styles from '../BlogPostPage/BlogPostPage.module.scss';

const BlogPostPage:React.FC = () => {

    const location  = useLocation()
    const data = location.state.data

    return (
        <div className={styles.BlogPostPage}>
            <div className='center'>
                <BlogPostHeader data={data}/>
                <BlogPostDetail id={data.id}/>

                <BlogPostBannerSummerSale/>
            </div>

        </div>
    )
}

export default BlogPostPage;