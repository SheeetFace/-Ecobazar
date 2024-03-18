
interface InputProps{
    placeholder:string
    forwardRef: React.RefObject<HTMLInputElement>
    className:string
    type:string
}

const Input:React.FC<InputProps> =({placeholder, forwardRef, className,type})=>{

    return(
        <div className={`DefaultBorderStyle ${className}`}>
            <input ref={forwardRef}
                   type={type}
                   placeholder={placeholder}/>
        </div>
    )
}
export default Input;