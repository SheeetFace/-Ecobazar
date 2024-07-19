import { useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../../store/store'; 

import { filterTypeGuard } from '../../../../../../utils/filterTypeGuard';

import Input from '../../../../../atoms/form/Input/Input';
import Divider from '../../../../../atoms/Divider/Divider';

import useValidation from '../../../../../../hooks/useValidation';

import styles from '../SearchFilter/SearchFilter.module.scss';

import { ValidateSearchOrSubscribeTypes } from '../../../../../../types/validateSearchOrSubscribeTypes';
import type {ChangeEvent} from 'react'
import type { InitBlogFilter } from '../../../../../../types/blog/blogFilterTypes';


const SearchFilter:React.FC = () => {

    const dispatch = useAppDispatch()

    const filter =  useAppSelector((state)=>state.blogFilter)

    const {isValid, validateFn} = useValidation();

    const handleSearch = useCallback((e:ChangeEvent<HTMLInputElement>)=>{

        const value = e.target.value;
        const validationResult = validateFn(value, ValidateSearchOrSubscribeTypes.SEARCH);

        if(validationResult.result || value === '') filterTypeGuard(dispatch, filter, {key: 'search' as keyof InitBlogFilter,value});
        else if(!validationResult.result && filter.search !== '') filterTypeGuard(dispatch, filter, {key: 'search' as keyof InitBlogFilter,value:''});

    }, [validateFn])

    const renderInput = useMemo(()=>{
        return(
            <Input  placeholder='Search'
                    type='text' 
                    className={(isValid) ?"_searchInputBlog":"_invalidSearchBlog"}
                    maxLength={30}
                    changeFn={handleSearch}
                    value={filter.search}
            />
        )
    },[isValid, filter.search])

    return (
        <section className={styles.SearchFilter}>

            {renderInput}

            <Divider className={styles._divider} type='horizontal'/>
        </section>
    )
}

export default SearchFilter;