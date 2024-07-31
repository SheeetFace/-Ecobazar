type ButtonType = 'submit'|'button'


interface ButtonProps{
    className:string
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
    text?:string
    icon?: React.ReactNode
    type:ButtonType
    disabled?:boolean
    ariaLabel?:string
}

const Button: React.FC<ButtonProps> = ({className,text,icon,onClick,type,disabled=false,ariaLabel=''}) => {

    return (
      <button className={className}
              onClick={onClick} 
              type={type} 
              disabled={disabled}
              aria-label={ariaLabel}>
        {icon && <>{icon}</>}
        {text ? text:''}
      </button>
    );
  };
  
  export default Button;