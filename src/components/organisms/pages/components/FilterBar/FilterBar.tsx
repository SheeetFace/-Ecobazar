import { useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../../store/store';

import FilterBarItem from '../../../../molecules/pages/components/FilterBarItem/FilterBarItem';

import styles from '../FilterBar/FilterBar.module.scss';

import type { RootState } from '../../../../../store/store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FilterBarProps<F>{
    selectFilter:(state:RootState) => F
    changeFilter: (payload: { key: keyof F; value: F[keyof F] }) => PayloadAction<{ key:keyof F; value:F[keyof F] }>;
}

const FilterBar = <F,>({selectFilter,changeFilter}:FilterBarProps<F>) => {

    const filter = useAppSelector((state)=>selectFilter(state))
    const dispatch = useAppDispatch();

    const createMap = useMemo(()=>{
        return Object.entries(filter as Record<string,unknown>)
                     .map(([key,value])=>({key:key as keyof F, value:value as F[keyof F]}));
    },[filter])

    const renderItem = useMemo(()=>{
        return createMap.map((item)=>{
            if(item.key !=='productsLength' && item.key !=='blogsLength' && item.value !== 'newest'){ 
                return <FilterBarItem<F> 
                key={item.key.toString()} 
                filter={item} 
                onChangeFilter={(key, value) => dispatch(changeFilter({ key, value }))}
                />
            }
        })
    },[createMap])

    return (
        <div className={styles.FilterBar}>
            {renderItem}
        </div>
    )
}

export default FilterBar;