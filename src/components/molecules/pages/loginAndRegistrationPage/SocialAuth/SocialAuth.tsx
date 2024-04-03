import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';

import GoogleIcon from '../../../../atoms/icon/auth/GoogleIcon';
import GithubIcon from '../../../../atoms/icon/auth/GithubIcon';
import AppleIcon from '../../../../atoms/icon/auth/AppleIcon';

import styles from '../SocialAuth/SocialAuth.module.scss';

const SocialAuth:React.FC = () => {

    return (
        <div className={styles.SocialAuth}>
            <div className={styles._or}>
                <Divider type='horizontal' className={styles._divider}/>
                <span>OR</span>
                <Divider type='horizontal' className={styles._divider}/>
            </div>

            <Button className='ButtonFilledOval fillGoogle colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH GOOGLE' icon={<GoogleIcon/>}/>
            <Button className='ButtonFilledOval fillApple colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH APPLE' icon={<AppleIcon/>}/>
            <Button className='ButtonFilledOval fillGithub colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='button' text='LOG IN WITH GITHUB' icon={<GithubIcon/>}/>
        </div>
    )
}

export default SocialAuth;