import styles from '../BlogPage/BlogPage.module.scss';

const BlogPage:React.FC = () => {

    return (
        <section className={styles.BlogPage}>
            <div className='center'>
            <div className={styles._container}>
                    <div className={styles._wrapper}>
                        <div className={styles._filters}>
                            <FilterProducts/>
                        </div>
                        <DiscountBanner/>
                        <SaleProducts/>
                    </div>

                    <div className={styles._content}>
                        <HeaderShop/>
                        <Products/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogPage;