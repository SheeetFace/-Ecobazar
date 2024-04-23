import {  useContext } from 'react';
import { FilterContext } from '../../../../../../contexts/FilterContext';

import styles from '../DateFilter/DateFilter.module.scss';

import type { ChangeEvent } from 'react';
type TDate = 'latest'|'newest'|'oldest'

const DateFilter:React.FC = () => {

    const {changeFilter} = useContext(FilterContext)

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>)=>{
        changeFilter('date', event.target.value as TDate)
    }

    return (
        <div className={styles.DateFilter}>
            <label>Sort by:</label>
            <select onChange={handleFilter}>
                <option value="latest" defaultValue="latest "> Latest </option>
                <option value="newest" > Newest </option>
                <option value="oldest" > Oldest </option>
            </select>
        </div>
    )
}

export default DateFilter;