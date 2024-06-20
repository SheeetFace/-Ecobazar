import { ChangeEvent } from 'react';

import { useAppDispatch } from '../../../../../store/store';

import { filterTypeGuard } from '../../../../../utils/filterTypeGuard';

import styles from '../DateFilter/DateFilter.module.scss';

import type { TDate,InitProductFilter } from '../../../../../types/productFilterType';
import type { InitBlogFilter } from '../../../../../types/blogFilterTypes';

interface DateFilterProps{
    filter: InitProductFilter|InitBlogFilter
}

const DateFilter:React.FC<DateFilterProps> = ({ filter }) => {

    const dispatch = useAppDispatch()

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>)=>{

        const date = event.target.value as TDate;

        const action = {
            key: 'date' as keyof InitProductFilter,
            value: date,
        };
        filterTypeGuard(dispatch, filter, action);
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