import { useState } from 'react';

import Input from '../../atoms/Input/Input';
import EyeIcon from '../../atoms/icon/navigate/EyeIcon';

import styles from '../PasswordInputAction/PasswordInputAction.module.scss';

interface PasswordInputActionProps{
    forwardRef: React.RefObject<HTMLInputElement>
    classNameWrapperInput?:string
}
const PasswordInputAction:React.FC<PasswordInputActionProps> = ({forwardRef,classNameWrapperInput}) => {

    const [showPass, setShowPass] = useState<boolean>(false)

    const type = showPass ? 'text':'password'

    const togglePasswordVisibility =()=>{
        setShowPass(showPass=> !showPass)
    };

    const ActionEyeIcon = ():JSX.Element=>{
        return(
            <div className={styles.IconAction}  onClick={togglePasswordVisibility}>
                <EyeIcon className={styles._icon}/>
            </div>
        )
    }

    return (
        <div className={styles.PasswordInputAction}>
             <Input className={classNameWrapperInput||''} placeholder='Password' type={type} forwardRef={forwardRef} icon={ActionEyeIcon()} />
        </div>
    )
}

export default PasswordInputAction;