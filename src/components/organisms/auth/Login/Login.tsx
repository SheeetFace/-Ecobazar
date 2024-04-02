import { useRef } from 'react';

import { NavLink } from 'react-router-dom';

import Input from '../../../atoms/Input/Input';
import PasswordInputAction from '../../../molecules/PasswordInputAction/PasswordInputAction';
import Button from '../../../atoms/Button/Button';
import Divider from '../../../atoms/Divider/Divider';

import AppleIcon from '../../../atoms/icon/auth/AppleIcon';
import GoogleIcon from '../../../atoms/icon/auth/GoogleIcon';
import GithubIcon from '../../../atoms/icon/auth/GithubIcon';

import styles from '../Login/Login.module.scss';

const Login:React.FC = () => {

    const loginRef = useRef(null)
    const passwordRef = useRef(null)
    const checkboxRef = useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(loginRef.current.value)
        console.log(passwordRef.current.value)
        console.log(checkboxRef.current.checked)

    }

    return (
        <div className={styles.Login}>
            <h1>Sign in</h1>
            <form  onSubmit={handleSubmit}>

                <Input className={styles._input} placeholder='Login' type='text'  forwardRef={loginRef}/>
                <PasswordInputAction forwardRef={passwordRef} classNameWrapperInput={styles._input}/>

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

            <div className={styles._loginWith}>
                <div className={styles._or}>
                    <Divider type='horizontal' className={styles._divider}/>
                    <span>OR</span>
                    <Divider type='horizontal' className={styles._divider}/>
                </div>

                <Button className='ButtonFilledOval fillGoogle colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH GOOGLE' icon={<GoogleIcon/>}/>
                <Button className='ButtonFilledOval fillApple colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH APPLE' icon={<AppleIcon/>}/>
                <Button className='ButtonFilledOval fillGithub colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH GITHUB' icon={<GithubIcon/>}/>
            </div>
            
            <div className={styles._register}>
                <span>Don’t have account?</span>

                <NavLink    to={'/registration'}
                            className={styles._navLink}>
                    Register
                </NavLink>
            </div>
        </div>
    )
}

export default Login;