import DateFilter from '../DateFilter/DateFilter';

import styles from '../HeaderFilterPage/HeaderFilterPage.module.scss';

import type { InitProductFilter,TChangeProductFilterFn } from '../../../../../types/productFilterType';
import type { InitBlogFilter,TChangeBlogFilterFn } from '../../../../../types/blogFilterTypes';


interface HeaderFilterPageProps{
    filter: InitProductFilter|InitBlogFilter
    changeFilter: TChangeProductFilterFn|TChangeBlogFilterFn
}

const HeaderFilterPage:React.FC<HeaderFilterPageProps> = ({filter,changeFilter}) => {

    let length 

    if('productsLength' in filter ) length = filter.productsLength
    else if( 'blogsLength' in filter ) length = filter.blogsLength
    else length = 0

    return (
        <section className={styles.HeaderFilterPage}>

            <DateFilter filter={filter} changeFilter={changeFilter}/>

            <div className={styles._results}>
                <span className={styles._count}>{length}</span>
                <span>Results Found</span>
            </div>
        </section>
    )
}

export default HeaderFilterPage;