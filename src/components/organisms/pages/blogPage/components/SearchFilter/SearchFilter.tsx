import { useContext, useCallback, useMemo } from 'react';

import { BlogFilterContext } from '../../../../../../context/BlogFilterContext';

import { filterTypeGuard } from '../../../../../../utils/filterTypeGuard';

import Input from '../../../../../atoms/form/Input/Input';
import Divider from '../../../../../atoms/Divider/Divider';

import useValidation from '../../../../../../hooks/useValidation';
import useDebounce from '../../../../../../hooks/useDebounce';

import styles from '../SearchFilter/SearchFilter.module.scss';

import { ValidateSearchOrSubscribeTypes } from '../../../../../../types/validateSearchOrSubscribeTypes';
import type {ChangeEvent} from 'react'

const SearchFilter:React.FC = () => {

    const {filter,changeFilter } = useContext(BlogFilterContext); 

    const {isValid, validateFn} = useValidation();

    const handleSearch = useCallback((e:ChangeEvent<HTMLInputElement>)=>{

        const value = e.target.value;

        const validationResult =validateFn(value, ValidateSearchOrSubscribeTypes.SEARCH)

        if(validationResult.result) filterTypeGuard(filter,changeFilter,"search", value)
        else if(!validationResult.result && validationResult.reason === 'inputEmpty' && filter.search !=='') filterTypeGuard(filter,changeFilter,"search", '')
        else filterTypeGuard(filter,changeFilter,"search", '')
    },[])

    console.log(filter.search)

    const renderInput = useMemo(()=>{
        return(
            <Input  placeholder='Search'
                    type='text' 
                    className={(isValid) ?"_searchInputBlog":"_invalidSearchBlog"}
                    maxLength={30}
                    changeFn={handleSearch}
            />
        )
    },[isValid])

    return (
        <section className={styles.SearchFilter}>

            {renderInput}

            <Divider className={styles._divider} type='horizontal'/>
        </section>
    )
}

export default SearchFilter;