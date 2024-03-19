import { useRef } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

import styles from '../SubscribePanel/SubscribePanel.module.scss';

const SubscribePanel = () =>{

    const ref = useRef(null)

    return(
        <form className={styles.SubscribePanel}>
            <span className={styles._input}>
                <Input forwardRef={ref} 
                    className='_subscribeInput' 
                    placeholder='Your email address'
                    type='text'/>
            </span>
            <span className={styles._button}>
                <Button className='Subscribe'
                        text='Subscribe'
                        type='submit'/>
            </span>
        </form>
    )
}
export default SubscribePanel;