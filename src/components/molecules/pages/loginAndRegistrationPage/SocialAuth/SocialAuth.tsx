import { useState } from 'react';

import { firebaseSignInWithService } from '../../../../../services/auth/firebaseSignInWithService';

import { useNavigate } from 'react-router-dom';

import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';

import GoogleIcon from '../../../../atoms/icon/auth/GoogleIcon';
import GithubIcon from '../../../../atoms/icon/auth/GithubIcon';
import AppleIcon from '../../../../atoms/icon/auth/AppleIcon';

import styles from '../SocialAuth/SocialAuth.module.scss';

type Provider = 'google'

const SocialAuth:React.FC = () => {

    const [isError, setIsError] = useState<boolean>(false)

    const navigate = useNavigate();

    const auth = async(provider: Provider)=>{
        try{
            const res = await firebaseSignInWithService(provider)

            if(res) navigate('/')

        }catch(error){
            console.error('Sign in error:', error);
            setIsError(true)

        }
    }

    return (
        <div className={styles.SocialAuth}>
            <div className={styles._or}>
                <Divider type='horizontal' className={styles._divider}/>
                <span>OR</span>
                <Divider type='horizontal' className={styles._divider}/>
            </div>

            {isError ? <h2>Something went wrong, try again 😭</h2> : null}

            <Button className='ButtonFilledOval fillGoogle colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH GOOGLE' icon={<GoogleIcon/>} onClick={()=>auth('google')}/>
            <Button className='ButtonFilledOval fillApple colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH APPLE' icon={<AppleIcon/>}/>
            <Button className='ButtonFilledOval fillGithub colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH GITHUB' icon={<GithubIcon/>}/>

        </div>
    )
}

export default SocialAuth;