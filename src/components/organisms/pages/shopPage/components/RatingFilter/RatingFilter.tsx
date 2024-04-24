import { memo, useContext, useMemo } from 'react';

import RatingItem from '../../../../../molecules/pages/shopPage/RatingItem/RatingItem';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';
import { FilterContext } from '../../../../../../contexts/FilterContext';

import Divider from '../../../../../atoms/Divider/Divider';

import styles from '../RatingFilter/RatingFilter.module.scss';

const RatingFilter:React.FC = () => {

    const [arrowClass, bodyClass,toggle] =useToggleFilter('')
    const {filter,changeFilter } = useContext(FilterContext);

    const handleFilter =(value:number)=>{
        const rating = filter.rating
        const index = rating.findIndex((el)=> el===value)
        
        if(index != -1) rating.splice(index,1)
        else rating.push(value)

        changeFilter('rating',rating)
    }

    const renderRating = useMemo(()=>{
        return [5,4,3,2,1].map((item,i)=>{
            return(
                <RatingItem rating={item}
                            fn={()=>handleFilter(item)}
                            key={i}
                            isChecked={filter.rating.includes(item)}
                />
            )
        })
    },[filter])


    return (
        <section className={styles.RatingFilter}>
            <div className={styles._header}>
                <h2>Rating</h2>
                <h1 className={arrowClass} onClick={toggle}>
                    &#11165;
                </h1>
            </div>
            
            <div className={bodyClass}>
                {renderRating}

                <Divider type='horizontal' className={styles._divider}/>
            </div>
        </section>
    )
}

export default memo(RatingFilter);