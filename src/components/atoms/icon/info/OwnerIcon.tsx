interface OwnerIconProps{
   className:string
}

const OwnerIcon:React.FC<OwnerIconProps> = ({className}) => {

    return (
        <svg className={className} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} d="M7.00033 8.16667C8.84128 8.16667 10.3337 6.67428 10.3337 4.83333C10.3337 2.99238 8.84128 1.5 7.00033 1.5C5.15938 1.5 3.66699 2.99238 3.66699 4.83333C3.66699 6.67428 5.15938 8.16667 7.00033 8.16667Z" stroke="#00B307" strokeWidth="1.2"/>
            <path className={className} d="M9.50019 10.6667H4.50019C2.19852 10.6667 0.137691 12.7917 1.65186 14.5242C2.68186 15.7025 4.38519 16.5 7.00019 16.5C9.61519 16.5 11.3177 15.7025 12.3477 14.5242C13.8627 12.7909 11.801 10.6667 9.50019 10.6667Z" stroke="#00B307" strokeWidth="1.2"/>
        </svg>
    )
}

export default OwnerIcon;