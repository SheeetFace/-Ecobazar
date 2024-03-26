import styles from '../styles/styles.module.scss';

const TimerHours:React.FC = () => {

    return (
        <div className={styles.TimerOne}>
            <span className={styles._time}>03</span>
            <span className={styles._label}>HOURS</span>
        </div>
    )
}

export default TimerHours;