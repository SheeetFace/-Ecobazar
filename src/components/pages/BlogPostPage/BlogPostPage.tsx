import { useLocation } from 'react-router-dom';

import styles from '../BlogPostPage/BlogPostPage.module.scss';

const BlogPostPage:React.FC = () => {

    const location  = useLocation()
    const data = location.state.data
    console.log(data)
    return (
        <div className={styles.BlogPostPage}>
            <div className='center'>
                <h1>{data.title}</h1>
            </div>

        </div>
    )
}

export default BlogPostPage;