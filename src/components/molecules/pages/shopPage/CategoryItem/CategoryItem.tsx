import styles from '../CategoryItem/CategoryItem.module.scss';

interface CategoryItemProps{
    value:string
    name:string
    fn:()=>void
    isChecked:boolean
}

const CategoryItem:React.FC<CategoryItemProps> = ({value,name,fn,isChecked}) => {
    return (
        <div className={styles.CategoryItem}>

            <input  
                    className={styles._checkbox}
                    name="categories"
                    type="checkbox"
                    value={value}
                    onClick={()=>fn()}
                    checked={isChecked}
            />

            <span>{name}</span>
            <span className={styles._count}>(999)</span>
        </div>

    )
}

export default CategoryItem;
