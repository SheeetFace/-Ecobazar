import {  useContext } from 'react';
import { FilterContext } from '../../../../../../context/FilterContext';

import styles from '../DateFilter/DateFilter.module.scss';

import type { ChangeEvent } from 'react';
type TDate = 'newest'|'oldest'

const DateFilter:React.FC = () => {

    const {filter,changeFilter} = useContext(FilterContext)

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>)=>{
        changeFilter('date', event.target.value as TDate)
    }

    return (
        <div className={styles.DateFilter}>
            <label>Sort by:</label>
            <select onChange={handleFilter}>
                <option value="newest" selected={filter.date === 'newest'} defaultValue='newest'> Newest </option>
                <option value="oldest" > Oldest </option>
            </select>
        </div>
    )
}

export default DateFilter;