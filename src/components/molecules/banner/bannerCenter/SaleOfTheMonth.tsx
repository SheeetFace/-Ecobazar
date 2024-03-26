import Timer from '../../Timer/Timer';

import styles from '../bannerCenter/SaleOfTheMonth.module.scss';

const SaleOfTheMonth:React.FC = () => {

    return (
        <div className={styles.SaleOfTheMonth}>
            <div className={styles._container}>

                <span className={styles._preTitle}>BEST DEAL</span>

                <span className={styles._title}>Sale of the Month</span>

                <div className='center'><Timer color='white'/></div>
                

            </div>
        </div>
    )
}

export default SaleOfTheMonth;