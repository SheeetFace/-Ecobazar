import { useState } from 'react';

import { firebaseSignInWithService } from '../../../../../services/auth/firebaseSignInWithService';

import { useNavigate } from 'react-router-dom';

import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';
import Loader from '../../../Loader/Loader';

import GoogleIcon from '../../../../atoms/icon/auth/GoogleIcon';
import FacebookIcon from '../../../../atoms/icon/auth/FacebookIcon';

import styles from '../SocialAuth/SocialAuth.module.scss';

type Provider = 'google'|'facebook'

const SocialAuth:React.FC = () => {

    const [isError, setIsError] = useState<boolean>(false)
    const [isLoading, setIsLoading] =useState<boolean>(false)

    const navigate = useNavigate();

    const auth = async(provider: Provider)=>{
        
        setIsLoading(true)

        if(isError) setIsError(false)

        try{
            const res = await firebaseSignInWithService(provider)

            if(res) setIsLoading(false), navigate('/')

        }catch(error){
            console.error('Sign in error:', error);
            setIsError(true)
            setIsLoading(false)
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
            {isLoading ? <Loader/> : null}

            <Button className='ButtonFilledOval fillGoogle colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH GOOGLE' icon={<GoogleIcon/>} onClick={()=>auth('google')}/>
            <Button className='ButtonFilledOval fillApple colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH FACEBOOK' icon={<FacebookIcon/>} onClick={()=>auth('facebook')}/>

        </div>
    )
}

export default SocialAuth;