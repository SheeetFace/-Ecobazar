import { Navigate, Outlet,NavLink } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../store/store';

import { clearError } from '../../../store/slices/authSlice';

import Loader from '../Loader/Loader';
import AlertMessage from '../AlertMessage/AlertMessage';
import Button from '../../atoms/Button/Button';

import styles from '../PrivateRoute/PrivateRouter.module.scss';

const PrivateRoute: React.FC = () => {

    const dispatch = useAppDispatch()

    const isUser = useAppSelector((state)=>state.auth.isUser)
    const loading = useAppSelector((state)=>state.auth.loading)
    const error = useAppSelector((state)=>state.auth.error)

    if(loading) return <div className={styles._container}><Loader size='4rem'/></div>
    
    if(error){
        return  <div className={styles._container}> 
                    <div className={styles._error}>
                        <AlertMessage type='error' message={error} title='Ops Error' isCanClose={false}/>
                        <NavLink to='/' className='_navLinkBlackPrimaryLetterSpacing'>
                            <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' 
                                    type='button' 
                                    text='Back Home'
                                    onClick={()=>dispatch(clearError())}
                            />
                        </NavLink>
                    </div>
                </div>
    }

    return (isUser && !error && !loading) ? <Outlet /> : <Navigate to="/login" />
};
  
export default PrivateRoute;