import { ChangeEvent } from 'react';

import { filterTypeGuard } from '../../../../../utils/filterTypeGuard';

import styles from '../DateFilter/DateFilter.module.scss';

import type { TDate,InitProductFilter,TChangeProductFilterFn } from '../../../../../types/productFilterType';
import type { InitBlogFilter,TChangeBlogFilterFn } from '../../../../../types/blogFilterTypes';

interface DateFilterProps{
    filter: InitProductFilter|InitBlogFilter
    changeFilter: TChangeProductFilterFn|TChangeBlogFilterFn
}

const DateFilter:React.FC<DateFilterProps> = ({ filter, changeFilter }) => {

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>)=>{

        const date = event.target.value as TDate;

        filterTypeGuard(filter,changeFilter,'date',date)
    }

    return (
        <div className={styles.DateFilter}>
            <label>Sort by:</label>
            <select value={filter.date} onChange={handleFilter}>
                <option value="newest"> Newest </option>
                <option value="oldest"> Oldest </option>
            </select>
        </div>
    )
}

export default DateFilter;