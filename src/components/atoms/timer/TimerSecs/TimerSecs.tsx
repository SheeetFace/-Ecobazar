import styles from '../styles/styles.module.scss';

const TimerSecs:React.FC = () => {

    return (
        <div className={styles.TimerOne}>
            <span className={styles._time}>03</span>
            <span className={styles._label}>SECS</span>
        </div>
    )
}

export default TimerSecs;