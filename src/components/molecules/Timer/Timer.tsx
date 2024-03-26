import TimerDays from '../../atoms/timer/TimerDays/TimerDays';
import TimerHours from '../../atoms/timer/TimerHours/TimerHours';
import TimerMins from '../../atoms/timer/TimerMins/TimerMins';
import TimerSecs from '../../atoms/timer/TimerSecs/TimerSecs';

import styles from '../Timer/Timer.module.scss';

type ColorType = 'white'|'black';
interface TimerProps{
    color:ColorType
}
const Timer:React.FC<TimerProps> = ({color}) => {

    const colorStyle = color === 'white' ? styles._white : styles._black;

    return (
        <div className={`${styles.Timer} ${colorStyle}`}>
            <TimerDays/>
            <span className={styles._points}>:</span>
            <TimerHours/>
            <span className={styles._points}>:</span>
            <TimerMins/>
            <span className={styles._points}>:</span>
            <TimerSecs/>
        </div>
    )
}

export default Timer;