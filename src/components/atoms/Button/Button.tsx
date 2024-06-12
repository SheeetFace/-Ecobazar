type ButtonType = 'submit'|'button'
interface ButtonProps{
    className:string
    onClick?:()=>void
    text?:string
    icon?: React.ReactNode
    type:ButtonType
    disabled?:boolean
}

const Button: React.FC<ButtonProps> = ({className,text,icon,onClick,type,disabled=false}) => {
    return (
      <button className={className} onClick={onClick} type={type} disabled={disabled}>
        {icon && <>{icon}</>}
        {text ? text:''}
      </button>
    );
  };
  
  export default Button;