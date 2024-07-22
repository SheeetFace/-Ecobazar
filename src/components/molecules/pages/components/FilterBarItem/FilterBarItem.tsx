import CrossIcon from '../../../../atoms/icon/action/CrossIcon/CrossIcon';

import styles from '../FilterBarItem/FilterBarItem.module.scss';


interface FilterBarItemProps<T>{
    filter: {key: keyof T, value:T[keyof T]}
    onChangeFilter: (key: keyof T, value: T[keyof T]) => void
}

const FilterBarItem = <T,>({ filter,onChangeFilter }:FilterBarItemProps<T>)=>{

    const renderFilterContent =()=>{
        const {value} = filter;

        if(!value || (Array.isArray(value) && value.length === 0)) return null;
        
        if(typeof value === 'object' && 'min' in value && 'max' in value){
            if(value.min && value.max) return `${value.min} - ${value.max}`;
            return null;
        }

        return value.toString().toUpperCase();
    }

    const handleRemove = ()=>{

        let initFilter;

        switch(filter.key){

            case 'search':
            case 'tag':
                initFilter = ''
                break

            case 'categoryValue':
            case 'rating':
                initFilter = []
                break
            
            case 'price':
                initFilter ={min:'',max:''}
                break
            
            case 'date':
                initFilter = 'newest'
                break
        }

        onChangeFilter(filter.key, initFilter as T[keyof T]);
    }

    const content = renderFilterContent();

    if(!content) return null;
    
    return(
        <div className={styles.FilterBarItem}>
            <span>{content}</span>
            <button className='defaultButtonStyle' onClick={handleRemove}>
                <div className={styles._cross}>
                    <CrossIcon/>
                </div>
            </button>
        </div>
    )
}

export default FilterBarItem;