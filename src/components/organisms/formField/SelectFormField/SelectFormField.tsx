import { useMemo } from 'react';

import FormValidationMessage from '../../../atoms/form/FormValidationMessage/FormValidationMessage';

import styles from '../SelectFormField/SelectFormField.module.scss';

interface SelectFormFieldProps {
    label:string,
    regions:string[]
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register:any
    isErrors:boolean
    errorMessage:string|undefined

}

const SelectFormField:React.FC<SelectFormFieldProps> = ({label,regions,register,isErrors,errorMessage}) => {

    const isError = isErrors ? '_errorInput' : ''; 
   
    const renderOptions=useMemo(()=>{
        return regions.map((item,i)=>{
            if(i===0 && item ==='') return <option value="" selected disabled hidden key={i}> -- Select -- </option>
            return  <option value={item} key={i}>{item}</option>
        })
    },[regions])

    return (
        <div className={styles.SelectFormField}>
            <label>{label}</label>
            <select className={isError} {...register}>
                {renderOptions}
            </select>
            <FormValidationMessage error={errorMessage}/>
        </div>
    )
}

export default SelectFormField;

