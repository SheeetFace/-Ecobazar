import styles from '../DiscountBanner/DiscountBanner.module.scss';

const DiscountBanner:React.FC = () => {

    return (
        <section className={styles.DiscountBanner}>
            <div className={styles._container}>
                <div className={styles._wrapper}>
                    <div className={styles._title}>
                        <span className={styles._percent}>79%</span>
                        <span>Discount</span>
                    </div>
                    <span>on your fast order</span>
                </div>
            </div>
        </section>
    )
}

export default DiscountBanner;