import styles from '../DisplayField/DisplayField.module.scss';

interface DisplayFieldProps {
    value: string|undefined
    defaultText: string
    className?: string
}

const DisplayField: React.FC<DisplayFieldProps> = ({ value, defaultText, className}) => {
    
    return (
      <span className={value ? className : styles._notSpecified}>
        {value || defaultText}
      </span>
    )
}

export default DisplayField;