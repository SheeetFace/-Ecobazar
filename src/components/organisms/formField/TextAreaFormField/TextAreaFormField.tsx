import FormValidationMessage from '../../../atoms/form/FormValidationMessage/FormValidationMessage';

import styles from '../TextAreaFormField/TextAreaFormField.module.scss';

interface TextAreaFormFieldProps{
    maxLength:number
    placeholder:string
    isErrors:boolean
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register:any
    errorMessage:string|undefined

}

const TextAreaFormField:React.FC<TextAreaFormFieldProps> = ({maxLength,placeholder,errorMessage,register,isErrors}) => {

    return (
        <>
             <textarea  className={`${styles.TextAreaFormField_border} ${isErrors ? '_errorInput' : ''}`}
                        maxLength={maxLength}
                        placeholder={placeholder}
                        {...register}
            />
            <FormValidationMessage error={errorMessage}/>
        </>
    )
}

export default TextAreaFormField;