import styles from '../FormValidationMessage/FormValidationMessage.module.scss';

interface FormValidationMessageProps{
    error:string|undefined
}

const FormValidationMessage:React.FC<FormValidationMessageProps> = ({error}) => {

    const classs = error? `${styles.FormValidationMessage} ${styles._visible}` : styles.FormValidationMessage;
    return (
        <span className={`${classs}`}>
            {error ? '⚠ ' : ''}
            {error}
        </span>
    )
}

export default FormValidationMessage;