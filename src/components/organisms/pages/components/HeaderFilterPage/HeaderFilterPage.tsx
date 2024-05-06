import DateFilter from '../../shopPage/components/DateFilter/DateFilter';

import styles from '../HeaderFilterPage/HeaderFilterPage.module.scss';

import type { InitProductFilter,TChangeProductFilterFn } from '../../../../../types/productFilterType';

interface HeaderFilterPageProps{
    filter: InitProductFilter
    changeFilter: TChangeProductFilterFn
}

const HeaderFilterPage:React.FC<HeaderFilterPageProps> = ({filter,changeFilter}) => {

    return (
        <section className={styles.HeaderFilterPage}>

            <DateFilter filter={filter} changeFilter={changeFilter}/>

            <div className={styles._results}>
                <span className={styles._count}>88</span>
                <span>Results Found</span>
            </div>
        </section>
    )
}

export default HeaderFilterPage;