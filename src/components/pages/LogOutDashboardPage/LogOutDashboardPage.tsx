import {  useContext } from 'react';

import { AuthContext } from '../../../context/AuthContext';

import { useNavigate } from 'react-router-dom';

import Button from '../../atoms/Button/Button';
import Loader from '../../molecules/Loader/Loader';
import AlertMessage from '../../molecules/AlertMessage/AlertMessage';

import styles from '../LogOutDashboardPage/LogOutDashboardPage.module.scss';


const LogOutDashboardPage:React.FC = () => {

    const { loading, error,logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const logOut = async()=>{
        const res = await logout()
        
        if(res) navigate('/');
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
                {error ? <AlertMessage type='error' title='Error' message={error} isCanClose={false}/> : null}
                {loading ? <Loader/> :null}
            </div>
        </section>
    )
}

export default LogOutDashboardPage;