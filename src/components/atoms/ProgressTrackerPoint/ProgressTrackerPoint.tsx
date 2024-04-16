import styles from '../ProgressTrackerPoint/ProgressTrackerPoint.module.scss';

interface ProgressTrackerPointProps{
 label:string
 status:string
}

const ProgressTrackerPoint:React.FC<ProgressTrackerPointProps> = ({label, status}) => {

    const classs = status && status === '✔' ? styles._pointCompleted : styles._pointNonCompleted

    return (
        <div className={styles.ProgressTrackerPoint}>
            <span className={classs}>{status}</span>
            <span className={styles._label}>{label}</span>
        </div>
    )
}

export default ProgressTrackerPoint;