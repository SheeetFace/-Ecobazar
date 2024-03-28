interface CategoryIconProps{
   className:string
}

const CategoryIcon:React.FC<CategoryIconProps> = ({className}) => {

    return (
        <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} d="M16.4917 10.5959L10.5167 16.5069C10.3619 16.6602 10.1781 16.7818 9.97573 16.8648C9.7734 16.9478 9.55653 16.9905 9.3375 16.9905C9.11847 16.9905 8.9016 16.9478 8.69927 16.8648C8.49694 16.7818 8.31312 16.6602 8.15833 16.5069L1 9.4335V1.18945H9.33333L16.4917 8.27109C16.8021 8.58002 16.9763 8.99791 16.9763 9.4335C16.9763 9.86909 16.8021 10.287 16.4917 10.5959V10.5959Z" stroke="#B3B3B3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path className={className} d="M5.16699 5.3118H5.17533" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default CategoryIcon;