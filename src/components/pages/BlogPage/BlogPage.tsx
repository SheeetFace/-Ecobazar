import FilterBlogs from '../../organisms/pages/blogPage/FilterBlogs/FilterBlogs';
import HeaderBlog from '../../organisms/pages/blogPage/HeaderBlog/HeaderBlog';


import styles from '../BlogPage/BlogPage.module.scss';

const BlogPage:React.FC = () => {

    return (
        <section className={styles.BlogPage}>
            <div className='center'>
            <div className={styles._container}>
                    <div className={styles._wrapper}>
                        <div className={styles._filters}>
                            <FilterBlogs/>
                        </div>
                        {/* <DiscountBanner/>
                        <SaleProducts/> */}
                    </div>

                    <div className={styles._content}>
                        <HeaderBlog/>
                        {/* <Products/> */}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogPage;