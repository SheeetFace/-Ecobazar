import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../../../../store/store';

import Button from '../../../../atoms/Button/Button';

import styles from '../SignInAlert/SignInAlert.module.scss';

const SignInAlert:React.FC = () => {

    const isUser = useAppSelector((state)=> state.auth.isUser);

    if(isUser) return null;

    return (
        <section className={styles.SignInAlert}>

            <span>You must be</span>
                <NavLink to={'/login'} className='_navLink _navLinkWidthMaxContent'>
                        <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight' 
                                type='button' 
                                text='logged in'
                                ariaLabel='Logged in button'
                        />
                </NavLink>
            <span>to post a comment.</span>
            
        </section>
    )
}

export default SignInAlert;