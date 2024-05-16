import { useLocation } from 'react-router-dom';

import BlogPostHeader from '../../organisms/pages/blogPostPage/BlogPostHeader/BlogPostHeader';

import styles from '../BlogPostPage/BlogPostPage.module.scss';

const BlogPostPage:React.FC = () => {

    const location  = useLocation()
    const data = location.state.data

    return (
        <div className={styles.BlogPostPage}>
            <div className='center'>
                <BlogPostHeader data={data}/>
            </div>

        </div>
    )
}

export default BlogPostPage;