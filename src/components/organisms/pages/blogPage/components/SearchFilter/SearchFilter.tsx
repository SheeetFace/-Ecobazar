import { useContext } from 'react';

import { BlogFilterContext } from '../../../../../../context/BlogFilterContext';

import { filterTypeGuard } from '../../../../../../utils/filterTypeGuard';

import Input from '../../../../../atoms/form/Input/Input';
import Divider from '../../../../../atoms/Divider/Divider';

import styles from '../SearchFilter/SearchFilter.module.scss';

import type {ChangeEvent} from 'react'

const SearchFilter:React.FC = () => {

    const {filter,changeFilter } = useContext(BlogFilterContext); 

    const handleSearch = (e:ChangeEvent<HTMLInputElement>)=>{
        //!! change class in input if error (globalsearch)
        filterTypeGuard(filter,changeFilter,"search", e.target.value)
    }

    return (
        <section className={styles.SearchFilter}>
                <Input placeholder='Search'
                   type='text' 
                   className="_searchInputBlog"
                   maxLength={30}
                   changeFn={handleSearch}
            />

            <Divider className={styles._divider} type='horizontal'/>
        </section>
    )
}

export default SearchFilter;