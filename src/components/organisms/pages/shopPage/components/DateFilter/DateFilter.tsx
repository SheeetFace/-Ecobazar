import { ChangeEvent } from 'react';

import styles from '../DateFilter/DateFilter.module.scss';

import type { TDate,InitProductFilter,TChangeProductFilterFn } from '../../../../../../types/productFilterType';

interface DateFilterProps{
    filter:InitProductFilter
    changeFilter:TChangeProductFilterFn
}

const DateFilter:React.FC<DateFilterProps> = ({ filter, changeFilter }) => {

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>)=>{
        changeFilter('date', event.target.value as TDate)
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