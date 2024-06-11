import { useContext } from 'react';

import { Navigate, Outlet,NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';

import Loader from '../Loader/Loader';
import AlertMessage from '../AlertMessage/AlertMessage';
import Button from '../../atoms/Button/Button';

import styles from '../PrivateRoute/PrivateRouter.module.scss';

const PrivateRoute: React.FC = () => {
    const { user, loading, error, clearError } = useContext(AuthContext);

    if(loading) return <div className={styles._container}><Loader size='4rem'/></div>
    
    if(error){
        return  <div className={styles._container}> 
                    <div className={styles._error}>
                        <AlertMessage type='error' message={error} title='Ops Error' isCanClose={false}/>
                        <NavLink to='/' className='_navLinkBlackPrimaryLetterSpacing'>
                            <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' 
                                    type='button' 
                                    text='Back Home'
                                    onClick={()=>clearError()}
                            />
                        </NavLink>
                    </div>
                </div>
    }

    return (user && !error && !loading) ? <Outlet /> : <Navigate to="/login" />
};
  
export default PrivateRoute;