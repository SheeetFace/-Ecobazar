import Input from '../../../atoms/form/Input/Input';
import FormValidationMessage from '../../../atoms/form/FormValidationMessage/FormValidationMessage';
import PasswordInputAction from '../../../molecules/PasswordInputAction/PasswordInputAction';

import styles from '../InputFormField/InputFormField.module.scss';

interface InputFormFieldProps{
    className:string
    inputType:string
    placeholder:string
    isErrors:boolean
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register:any
    errorMessage:string|undefined
    maxLength?:number
    isPassword?:boolean
}

const InputFormField:React.FC<InputFormFieldProps> = ({className,inputType,placeholder,isErrors,register,errorMessage,maxLength=40,isPassword=false}) => {

    const props ={
        placeholder,
        isErrorValidation:isErrors,
        register,
        maxLength,
    }

    return (
            <div className={className}>

                {!isPassword ?
                    <Input  className={styles.InputFormField_border}
                            type={inputType}
                            {...props}
                    />
                :
                    <PasswordInputAction    classNameWrapperInput={styles.InputFormField_border}
                                            type='password'
                                            {...props}
                    />
                }

                <FormValidationMessage error={errorMessage}/>
            </div>
    )
}

export default InputFormField;