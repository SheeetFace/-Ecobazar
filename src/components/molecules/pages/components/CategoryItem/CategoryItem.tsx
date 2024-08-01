import styles from '../CategoryItem/CategoryItem.module.scss';

interface CategoryItemProps{
    value:string
    name:string
    fn:()=>void
    isChecked:boolean
    countCategory:number|undefined
}

const CategoryItem:React.FC<CategoryItemProps> = ({value,name,fn,isChecked,countCategory}) => {
    return (
        <div className={styles.CategoryItem}>

            <input  
                    className={styles._checkbox}
                    name="categories"
                    type="checkbox"
                    value={value}
                    onClick={()=>fn()}
                    onChange={() => {}}
                    checked={isChecked}
            />
            
            <div className={styles._container}>
                <span>{name}</span>
                <span className={styles._count}>({countCategory})</span>
            </div>
        </div>

    )
}

export default CategoryItem;
