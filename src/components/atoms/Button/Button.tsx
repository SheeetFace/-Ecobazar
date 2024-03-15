interface ButtonProps{
    className:string
    onClick?:()=>void
    text?:string
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({className,text, icon, onClick }) => {
    return (
      <button className={className} onClick={onClick}>
        {icon && <>{icon}</>}
        {text ? text:''}
      </button>
    );
  };
  
  export default Button;