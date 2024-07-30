import BlogPostHeader from '../BlogPostHeader/BlogPostHeader';
import BlogPostDetail from '../BlogPostDetail/BlogPostDetail';
import BlogPostBannerSummerSale from '../../../../molecules/banner/blogPostPage/BlogPostBannerSummerSale/BlogPostBannerSummerSale';
import BlogPostLeaveComment from '../BlogPostLeaveComment/BlogPostLeaveComment';
import BlogPostComments from '../BlogPostComments/BlogPostComments';

import styles from '../BlogPostContent/BlogPostContent.module.scss';

import type { BlogDataTypes } from '../../../../../types/blog/blogDataTypes';

const BlogPostContent:React.FC<{data:BlogDataTypes }> = ({data}) => {

    return (
        <div className={styles.BlogPostContent}>
            <div className='center'>
                <BlogPostHeader data={data}/>

                <BlogPostDetail id={data.id} post={data.post}/>

                <BlogPostBannerSummerSale/>

                <BlogPostLeaveComment/>

                <BlogPostComments/>
            </div>
        </div>
    )
}

export default BlogPostContent;