type ButtonType = 'submit'|'button'
interface ButtonProps{
    className:string
    onClick?:()=>void
    text?:string
    icon?: React.ReactNode
    type:ButtonType
}

const Button: React.FC<ButtonProps> = ({className,text,icon,onClick,type}) => {
    return (
      <button className={className} onClick={onClick} type={type}>
        {icon && <>{icon}</>}
        {text ? text:''}
      </button>
    );
  };
  
  export default Button;