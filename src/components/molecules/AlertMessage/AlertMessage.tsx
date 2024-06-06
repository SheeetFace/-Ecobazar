import { useState } from 'react';

import styles from '../AlertMessage/AlertMessage.module.scss';

type AlertType = 'note'|'test'

interface AlertMessageProps{
    type:AlertType
}

const AlertMessage:React.FC<AlertMessageProps> = ({type}) => {

    const [show, setShow] = useState<boolean>(true)

    const alertNote={
        title:'Note',
        message:'Please note, If you sign up with your email and password and then sign in via Google with the same address, you will have different accounts. Be careful when choosing your login method to avoid creating multiple accounts. Thank you for your understanding!',
        class: styles._note
    }
    const alertTest={
        title:'Test account',
        message:<><b>email: </b>customer1@gmail.com<br/><b>password: </b>123123</>,
        class:styles._test
    }

    let options;

    switch (type){
        case 'note':
            options = alertNote;
            break
        case 'test':
            options = alertTest;
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
                    <div className={styles._cross}>
                        <span onClick={()=>setShow(false)}>✖</span>
                    </div>
                </div>
                
            </>
            :
            null}
        </>
    )
}

export default AlertMessage;