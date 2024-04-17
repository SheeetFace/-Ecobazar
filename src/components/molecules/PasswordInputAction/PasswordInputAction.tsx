import { useState } from 'react';

import Input from '../../atoms/form/Input/Input';
import EyeIcon from '../../atoms/icon/navigate/EyeIcon';

import styles from '../PasswordInputAction/PasswordInputAction.module.scss';

interface PasswordInputActionProps{
    forwardRef?: React.RefObject<HTMLInputElement>
    classNameWrapperInput?:string,
    placeholder:string
    type?:string
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register?: any 
    maxLength?:number
    isErrorValidation?:boolean 
}
const PasswordInputAction:React.FC<PasswordInputActionProps> = ({forwardRef,classNameWrapperInput, placeholder,register=null,isErrorValidation,maxLength=40}) => {

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
            <Input  className={classNameWrapperInput||''} 
                    placeholder={placeholder}
                    type={type}
                    forwardRef={forwardRef}
                    register={register}
                    isErrorValidation={isErrorValidation}
                    maxLength={maxLength}
                    icon={ActionEyeIcon()}
            />
        </div>
    )
}

export default PasswordInputAction;