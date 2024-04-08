import Input from '../../../atoms/form/Input/Input';
import FormValidationMessage from '../../../atoms/form/FormValidationMessage/FormValidationMessage';

import styles from '../InputFormField/InputFormField.module.scss';

interface InputFormFieldProps{
    className:string
    inputType:string
    placeholder:string
    isErrors:boolean
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register:any
    errorMessage:string|undefined
}

const InputFormField:React.FC<InputFormFieldProps> = ({className,inputType,placeholder,isErrors,register,errorMessage}) => {

    return (
            <div className={className}>
                <Input  className={styles.InputFormField_border}
                        type={inputType}
                        placeholder={placeholder}
                        isErrorValidation={isErrors}
                        register={register}
                />
                <FormValidationMessage error={errorMessage}/>
            </div>
    )
}

export default InputFormField;