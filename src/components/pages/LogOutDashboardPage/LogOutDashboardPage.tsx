import { useState } from 'react';

import { firebaseSignOutService } from '../../../services/auth/firebaseSignOutService';

import { useNavigate } from 'react-router-dom';

import Button from '../../atoms/Button/Button';

import styles from '../LogOutDashboardPage/LogOutDashboardPage.module.scss';


const LogOutDashboardPage:React.FC = () => {

    const [isError, setIsError] = useState<boolean>(false)

    const navigate = useNavigate();

    const logOut = async()=>{
        const res = await firebaseSignOutService()
        
        if(res.success) navigate('/');
        else setIsError(true)

    }

    return (
        <section className={styles.LogOutDashboardPage}>
            <span>🥦</span>
            <h2>Oh, you really want to log out of ECOBAZAR?</h2>

            <div className={styles._logout}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' 
                        type='button' 
                        text='Log Out'
                        onClick={()=>logOut()}
                />
                {isError ? <h1>Something went wrong, try again 😭</h1> : null}
            </div>
        </section>
    )
}

export default LogOutDashboardPage;