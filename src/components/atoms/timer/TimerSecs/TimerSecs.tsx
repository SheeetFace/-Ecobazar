import { useEffect, useState } from 'react';
import styles from '../styles/styles.module.scss';

const TimerSecs:React.FC = () => {

    const [sec, setSec] = useState<number>(59)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSec(prev=> ((prev === 0) ? 59 : prev-1))
        },1000)

        return(()=> clearInterval(timer))
    },[])
    
    return (
        <div className={styles.TimerOne}>
            <span className={styles._time}>{sec >=10 ? sec : `0${sec}`}</span>
            <span className={styles._label}>SECS</span>
        </div>
    )
}

export default TimerSecs;
