import ProgressTrackerPoint from '../../../../atoms/ProgressTrackerPoint/ProgressTrackerPoint';

import styles from '../ProgressTracker/ProgressTracker.module.scss';

interface ProgressTrackerProps{
    status:string
}

const ProgressTracker:React.FC<ProgressTrackerProps> = ({status}) => {

    return (
        <section className={styles.ProgressTracker}>
            {/* {status} */}
            <div className={styles._greyLine}>
                <span className={styles._line}></span>
            </div>

            <div className={styles._points}>

                <ProgressTrackerPoint text='Order Received'/>
                <ProgressTrackerPoint text='Processing'/>
                <ProgressTrackerPoint text='One The Way'/>
                <ProgressTrackerPoint text='Delivered'/>

            </div>
        </section>
    )
}

export default ProgressTracker;