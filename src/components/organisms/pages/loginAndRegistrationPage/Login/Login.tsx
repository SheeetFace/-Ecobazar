import { useRef } from 'react';

import { NavLink } from 'react-router-dom';

import { firebaseSignInWithEmailAndPasswordService } from '../../../../../services/auth/signInServices/firebaseSignInWithEmailAndPasswordService';

import Input from '../../../../atoms/form/Input/Input';
import PasswordInputAction from '../../../../molecules/PasswordInputAction/PasswordInputAction';
import Button from '../../../../atoms/Button/Button';
import SocialAuth from '../../../../molecules/pages/loginAndRegistrationPage/SocialAuth/SocialAuth';

import styles from '../Login/Login.module.scss';

import type { FormEvent } from 'react';

const Login:React.FC = () => {

    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(loginRef.current && passwordRef.current && checkboxRef.current ){
            console.log(loginRef.current.value)
            console.log(passwordRef.current.value)
            // console.log(checkboxRef.current.checked)
            const res = await firebaseSignInWithEmailAndPasswordService(loginRef.current.value,passwordRef.current.value)
            console.log(res)
        }
    }

    return (
        <section className={styles.Login}>
            <h1>Sign in</h1>

            <form  onSubmit={handleSubmit}>

                <Input className={styles._input} placeholder='Login' type='text'  forwardRef={loginRef}/>
                <PasswordInputAction forwardRef={passwordRef} classNameWrapperInput={styles._input} placeholder='Password'/>

                <div className={styles._container}>
                    <div className={styles._checkboxWrapper}>
                        <Input className={styles._checkbox} type='checkbox' forwardRef={checkboxRef} />
                        <span>Remember me</span>
                    </div>

                    <span className={styles._forgetPassword}>
                        Forget Password
                    </span>
                </div>
                
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='submit' text='Log in'/>

            </form>

            <SocialAuth/>
            
            <div className={styles._registerOrLogin}>
                <span>Don’t have account?</span>

                <NavLink    to={'/registration'}
                            className={styles._navLink}>
                    Registration
                </NavLink>
            </div>
        </section>
    )
}

export default Login;