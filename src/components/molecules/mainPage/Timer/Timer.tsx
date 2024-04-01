import TimerDays from '../../../atoms/timer/TimerDays/TimerDays';
import TimerGeneric from '../../../atoms/timer/TimerGeneric/TimerGeneric';

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
            <TimerGeneric  delay={3600000} initialValue={23} label='HOURS'/>
            <span className={styles._points}>:</span>
            <TimerGeneric  delay={60000} initialValue={59} label='MINS'/>
            <span className={styles._points}>:</span>
            <TimerGeneric  delay={1000} initialValue={59} label='SECS'/>
        </div>
    )
}
export default Timer;