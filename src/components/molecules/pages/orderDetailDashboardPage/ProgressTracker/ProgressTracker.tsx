import ProgressTrackerPoint from '../../../../atoms/ProgressTrackerPoint/ProgressTrackerPoint';

import { completedData,inProcessData } from '../../../../../data/temp/progressTrackerData';

import styles from '../ProgressTracker/ProgressTracker.module.scss';

interface ProgressTrackerProps{
    status:string
}

const ProgressTracker:React.FC<ProgressTrackerProps> = ({status}) => {


    const localStatus = status && status === "Completed" ? completedData : inProcessData

    const lineTrackerClass = status && status === "Completed" ? styles._lineFull : styles._lineHalf

    const renderPoints = localStatus.map(({label,status},i)=>(
        <ProgressTrackerPoint key={i} label={label} status={status}/>
    ));

    return (
        <section className={styles.ProgressTracker}>
            <div className={styles._greyLine}>
                <span className={lineTrackerClass}/>
            </div>

            <div className={styles._points}>
                {renderPoints}
            </div>

        </section>
    )
}

export default ProgressTracker;