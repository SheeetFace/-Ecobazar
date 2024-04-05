interface InputProps{
    placeholder?:string
    forwardRef?: React.RefObject<HTMLInputElement>
    className:string
    type:string
    icon?: React.ReactNode
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register?: any 
}

const Input:React.FC<InputProps> =({placeholder, forwardRef, className,type, icon,register=null})=>{

    const classs = type==='checkbox' ?  className : `DefaultBorderStyle ${className}`;

    return(
        <div className={classs}>
            <input ref={forwardRef}
                   type={type}
                   placeholder={placeholder}
                   {...register}
                  />
            {icon ? icon: null}
        </div>
    )
}
export default Input;
