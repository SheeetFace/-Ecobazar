import styles from '../LatestNews/LatestNews.module.scss';

const LatestNews:React.FC = () => {

    return (
        <section className={styles.LatestNews}>
            <div className='center'>
                <span className={styles._title}>Latest News</span>
            </div>
           
        </section>
    )
}

export default LatestNews;