import styles from '../styles/styles.module.scss';

const TimerMins:React.FC = () => {

    return (
        <div className={styles.TimerOne}>
            <span className={styles._time}>03</span>
            <span className={styles._label}>MINS</span>
        </div>
    )
}

export default TimerMins;