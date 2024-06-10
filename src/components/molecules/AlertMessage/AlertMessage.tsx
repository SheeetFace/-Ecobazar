import { useState } from 'react';

import styles from '../AlertMessage/AlertMessage.module.scss';

type AlertType = 'warning'|'success'|'error'

interface AlertMessageProps{
    type:AlertType
    isCanClose?:boolean
    message:string|JSX.Element,
    title:string
}

const AlertMessage:React.FC<AlertMessageProps> = ({type, isCanClose =true, message, title}) => {

    const [show, setShow] = useState<boolean>(true)

    const alertWarning={
        title,
        message,
        class: styles._warning
    }
    const alertSuccess={
        title,
        message,
        class:styles._success
    }
    const alertError={
        title,
        message,
        class:styles._error
    }

    let options;

    switch (type){
        case 'warning':
            options = alertWarning;
            break
        case 'success':
            options = alertSuccess;
            break
        case 'error':
            options = alertError;
            break
    }

    return (
        <>
            {show ?
            <>  
                <div className={`${styles.AlertMessage} ${options.class}`}>
                    <div className={styles._container}>
                        <div className={styles._title}>
                            <b>{options.title}</b>
                        </div>
                        <span className={styles._message}>{options.message}</span>
                    </div>

                    {isCanClose ? 
                        <div className={styles._cross}>
                            <span onClick={()=>setShow(false)}>✖</span>
                        </div>
                    :null}
                    
                </div>
            </>
            :null}
        </>
    )
}

export default AlertMessage;