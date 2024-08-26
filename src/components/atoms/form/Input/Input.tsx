import type {ChangeEvent} from 'react'

interface InputProps{
    placeholder?:string
    forwardRef?: React.RefObject<HTMLInputElement>
    className:string
    type:string
    icon?: React.ReactNode
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register?: any 
    isErrorValidation?:boolean
    maxLength?:number
    changeFn?:(e:ChangeEvent<HTMLInputElement>) => void
    value?:string
    disabled?:boolean
}

const Input:React.FC<InputProps> =({placeholder, forwardRef, className,type, icon,register=null,isErrorValidation,maxLength=40, changeFn, value, disabled})=>{

    const isError = isErrorValidation ? '_errorInput' : ''; 
    const classs = type==='checkbox' ?  className : `DefaultBorderStyle ${className} ${isError}`;

    return(
        <div className={classs}>
            <input ref={forwardRef}
                   type={type}
                   placeholder={placeholder}
                   maxLength={maxLength}
                   onChange={changeFn ? (e)=>changeFn(e) : undefined}
                   value={value}
                   disabled={disabled}
                   {...register}
                  />
            {icon ? icon: null}
        </div>
    )
}

export default Input;
