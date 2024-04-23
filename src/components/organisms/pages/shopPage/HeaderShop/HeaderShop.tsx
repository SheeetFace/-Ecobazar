import DateFilter from '../components/DateFilter/DateFilter';

import styles from '../HeaderShop/HeaderShop.module.scss';

const HeaderShop:React.FC = () => {

    return (
        <section className={styles.HeaderShop}>

            <DateFilter/>

            <div className={styles._results}>
                <span className={styles._count}>88</span>
                <span>Results Found</span>
            </div>
        </section>
    )
}

export default HeaderShop;