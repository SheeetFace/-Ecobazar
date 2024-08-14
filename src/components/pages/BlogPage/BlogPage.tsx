import { selectBlogFilter, changeFilter } from '../../../store/slices/blogFilterSlice';

import FilterBlogs from '../../organisms/pages/blogPage/FilterBlogs/FilterBlogs';
import HeaderBlog from '../../organisms/pages/blogPage/HeaderBlog/HeaderBlog';
import Blogs from '../../organisms/pages/blogPage/Blogs/Blogs';
import RecentlyAdded from '../../organisms/pages/blogPage/components/RecentlyAdded/RecentlyAdded';
import FilterBar from '../../organisms/pages/components/FilterBar/FilterBar';
import ResponsiveFilters from '../../organisms/pages/components/ResponsiveFilters/ResponsiveFilters';

import styles from '../BlogPage/BlogPage.module.scss';

import type { InitBlogFilter } from '../../../types/blog/blogFilterTypes';

const BlogPage:React.FC = () => {

    return (
        <section className={styles.BlogPage}>
            <div className='center'>
            <div className={styles._container}>
                    <div className={styles._wrapper}>
                        <ResponsiveFilters FilterComponent={FilterBlogs}/>
                        <div className={styles._additionalInfo}>
                            <RecentlyAdded/>
                        </div>
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