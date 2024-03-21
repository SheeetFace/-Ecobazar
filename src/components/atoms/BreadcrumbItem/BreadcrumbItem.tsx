import styles from '../BreadcrumbItem/Breadcrumb.module.scss'

interface BreadcrumbItemProps{
    name:string
    pathBack:string
}
const BreadcrumbItem:React.FC<BreadcrumbItemProps> =({name,pathBack})=>{

    return(
            <span className={styles.BreadcrumbItem}>
                {name}
            </span>
    )
}
export default BreadcrumbItem;

