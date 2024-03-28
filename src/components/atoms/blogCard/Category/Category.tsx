import CategoryIcon from '../../icon/info/CategoryIcon';

import styles from '../Category/Category.module.scss';

interface CategoryProps{
    category:string
}
const Category:React.FC<CategoryProps> = ({category}) => {

    return (
        <div className={styles.Category}>
            <CategoryIcon className=''/>
            <span>{category}</span>
        </div>
    )
}

export default Category;