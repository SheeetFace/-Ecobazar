import styles from '../styles/styles.module.scss';

const TimerDays:React.FC = () => {

    return (
        <div className={styles.TimerOne}>
            <span className={styles._time}>03</span>
            <span className={styles._label}>DAYS</span>
        </div>
    )
}

export default TimerDays;