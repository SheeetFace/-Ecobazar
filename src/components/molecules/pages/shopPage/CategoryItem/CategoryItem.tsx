import styles from '../CategoryItem/CategoryItem.module.scss';

interface CategoryItemProps{
    value:string
    name:string
    fn:()=>void
}

const CategoryItem:React.FC<CategoryItemProps> = ({value,name,fn}) => {

    return (
        <div className={styles.CategoryItem}>

            <input  className={styles._radio}
                    name="categories"
                    type="radio"
                    value={value}
                    onClick={()=>fn()}
            />

            <span>{name}</span>
            <span className={styles._count}>(999)</span>
        </div>

    )
}

export default CategoryItem;