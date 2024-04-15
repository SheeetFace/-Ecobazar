import styles from '../ProgressTrackerPoint/ProgressTrackerPoint.module.scss';

interface ProgressTrackerPointProps{
 text:string
}

const ProgressTrackerPoint:React.FC<ProgressTrackerPointProps> = ({text}) => {

    return (
        <div className={styles.ProgressTrackerPoint}>
            <span className={styles._point}>✔</span>
            <span>{text}</span>
        </div>
    )
}

export default ProgressTrackerPoint;