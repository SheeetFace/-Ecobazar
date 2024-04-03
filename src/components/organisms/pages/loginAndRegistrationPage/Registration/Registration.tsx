import { useRef } from 'react';

import { NavLink } from 'react-router-dom';

import Input from '../../../../atoms/Input/Input';
import Button from '../../../../atoms/Button/Button';
import PasswordInputAction from '../../../../molecules/PasswordInputAction/PasswordInputAction';
import SocialAuth from '../../../../molecules/pages/loginAndRegistrationPage/SocialAuth/SocialAuth';

import styles from '../Registration/Registration.module.scss';

import type { FormEvent } from 'react';

const Registration:React.FC = () => {

    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(checkboxRef.current?.checked){
            if(loginRef.current && passwordRef.current && confirmPasswordRef.current ){
                console.log(loginRef.current.value)
                console.log(passwordRef.current.value)
                console.log(confirmPasswordRef.current.checked)
            }
        }

    }

    return (
        <section className={styles.Registration}>
            <h1>Create Account</h1>

            <form  onSubmit={handleSubmit}>

                <Input className={styles._input} placeholder='Login' type='text'  forwardRef={loginRef}/>
                <PasswordInputAction forwardRef={passwordRef} classNameWrapperInput={styles._input} placeholder='Password'/>
                <PasswordInputAction forwardRef={confirmPasswordRef} classNameWrapperInput={styles._input} placeholder='Confirm Password'/>
                
                <div className={styles._checkboxWrapper}>
                    <Input className={styles._checkbox} type='checkbox' forwardRef={checkboxRef} />
                    <span>Accept all terms & Conditions</span>
                </div>

                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='submit' text='Create Account'/>

            </form>

            <SocialAuth/>

            <div className={styles._registerOrLogin}>
                <span>Already have account?</span>

                <NavLink    to={'/login'}
                            className={styles._navLink}>
                     Login
                </NavLink>
            </div>

        </section>
    )
}

export default Registration;