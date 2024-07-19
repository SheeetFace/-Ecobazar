import DateFilter from '../DateFilter/DateFilter';

import styles from '../HeaderFilterPage/HeaderFilterPage.module.scss';

import type { InitProductFilter } from '../../../../../types/product/productFilterType';
import type { InitBlogFilter} from '../../../../../types/blog/blogFilterTypes';


interface HeaderFilterPageProps{
    filter: InitProductFilter|InitBlogFilter
}

const HeaderFilterPage:React.FC<HeaderFilterPageProps> = ({filter}) => {

    let length ;

    if('productsLength' in filter ) length = filter.productsLength
    else if( 'blogsLength' in filter ) length = filter.blogsLength
    else length = 0

    return (
        <section className={styles.HeaderFilterPage}>

            <DateFilter filter={filter}/>

            <div className={styles._results}>
                <span className={styles._count}>{length}</span>
                <span>Results Found</span>
            </div>
        </section>
    )
}

export default HeaderFilterPage;