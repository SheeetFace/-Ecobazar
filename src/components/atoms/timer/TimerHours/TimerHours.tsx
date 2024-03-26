import { useEffect, useState } from 'react';

import styles from '../styles/styles.module.scss';

const TimerHours:React.FC = () => {

    const [hour, setHour] = useState<number>(23)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setHour(prev=> ((prev === 0) ? 23 : prev-1))
        },3600000)

        return(()=> clearInterval(timer))
    },[])
    
    return (
        <div className={styles.TimerOne}>
            <span className={styles._time}>{hour >=10 ? hour : `0${hour}`}</span>
            <span className={styles._label}>HOURS</span>
        </div>
    )
}

export default TimerHours;