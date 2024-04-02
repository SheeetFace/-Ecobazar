
interface InputProps{
    placeholder?:string
    forwardRef: React.RefObject<HTMLInputElement>
    className:string
    type:string
    icon?: React.ReactNode
}

const Input:React.FC<InputProps> =({placeholder, forwardRef, className,type, icon})=>{

    const classs = type==='checkbox' ?  className : `DefaultBorderStyle ${className}`;

    return(
        <div className={classs}>
            <input ref={forwardRef}
                   type={type}
                   placeholder={placeholder}/>
            {icon ? icon: null}
        </div>
    )
}
export default Input;