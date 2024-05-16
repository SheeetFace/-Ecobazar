import { NavLink } from 'react-router-dom';

import Button from '../../../../atoms/Button/Button';

import styles from '../SignInAlert/SignInAlert.module.scss';

const SignInAlert:React.FC = () => {

    return (
        <section className={styles.SignInAlert}>

            <span>You must be</span>
            <NavLink to={'/login'} className='_navLink _navLinkWidthMaxContent'>
                    <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight ' type='button' text='logged in'/>
            </NavLink>
            <span>to post a comment.</span>
            
        </section>
    )
}

export default SignInAlert;