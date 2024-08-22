import { useNavigate } from 'react-router-dom';

import { useLoadingAndError } from '../../../../../hooks/useLoadingAndError';

import { firebaseSignInWithService } from '../../../../../services/auth/firebaseSignInWithService';

import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';

import GoogleIcon from '../../../../atoms/icon/auth/GoogleIcon';
import GithubIcon from '../../../../atoms/icon/auth/GithubIcon';

import styles from '../SocialAuth/SocialAuth.module.scss';


import type { AuthProvider } from '../../../../../types/auth/authProviderTypes';

const SocialAuth:React.FC = () => {

    const { executeAsync, renderLoaderOrError } = useLoadingAndError();

    const navigate = useNavigate();

    const signInWithProvider = async(provider: AuthProvider)=>{

        const res = await executeAsync(()=>firebaseSignInWithService(provider))

        if(res) return navigate('/')
    }

    return (
        <div className={styles.SocialAuth}>
            <div className={styles._or}>
                <Divider type='horizontal' className={styles._divider}/>
                <span>OR</span>
                <Divider type='horizontal' className={styles._divider}/>
            </div>

            {renderLoaderOrError()}
            
            <Button className='ButtonFilledOval fillGoogle colorTextGrey1 buttonMaxWidth buttonMaxHeight'
                    type='button'
                    text='LOG IN WITH GOOGLE'
                    icon={<GoogleIcon/>} 
                    onClick={()=>signInWithProvider('google')}
                    ariaLabel='LOG IN WITH GOOGLE BUTTON'
            />
            <Button className='ButtonFilledOval fillGithub colorTextGrey1 buttonMaxWidth buttonMaxHeight' 
                    type='button' 
                    text='LOG IN WITH GITHUB' 
                    icon={<GithubIcon/>} 
                    onClick={()=>signInWithProvider('github')}
                    ariaLabel='LOG IN WITH GITHUB BUTTON'
            />

        </div>
    )
}

export default SocialAuth;