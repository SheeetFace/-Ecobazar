import { selectBlogFilter, changeFilter } from '../../../store/slices/blogFilterSlice';

import FilterBlogs from '../../organisms/pages/blogPage/FilterBlogs/FilterBlogs';
import HeaderBlog from '../../organisms/pages/blogPage/HeaderBlog/HeaderBlog';
import Blogs from '../../organisms/pages/blogPage/Blogs/Blogs';
import RecentlyAdded from '../../organisms/pages/blogPage/components/RecentlyAdded/RecentlyAdded';
import FilterBar from '../../organisms/pages/components/FilterBar/FilterBar';

import styles from '../BlogPage/BlogPage.module.scss';

import type { InitBlogFilter } from '../../../types/blog/blogFilterTypes';

const BlogPage:React.FC = () => {

    return (
        <section className={styles.BlogPage}>
            <div className='center'>
            <div className={styles._container}>
                    <div className={styles._wrapper}>
                        <div className={styles._filters}>
                            <FilterBlogs/>
                        </div>
                        <RecentlyAdded/>
                    </div>

                    <div className={styles._content}>
                        <HeaderBlog/>
                        <FilterBar<InitBlogFilter >  selectFilter ={selectBlogFilter} changeFilter={changeFilter} />
                        <Blogs/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogPage;