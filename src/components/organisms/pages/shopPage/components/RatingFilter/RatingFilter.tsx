import { memo, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../../store/store';
import { changeFilter } from '../../../../../../store/slices/productFilterSlice';

import RatingItem from '../../../../../molecules/pages/shopPage/RatingItem/RatingItem';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';

import Divider from '../../../../../atoms/Divider/Divider';

import styles from '../RatingFilter/RatingFilter.module.scss';

const RatingFilter:React.FC = () => {

    const dispatch = useAppDispatch()
    const filter = useAppSelector((state)=>state.productFilter)

    const [arrowClass, bodyClass,toggle] =useToggleFilter('')

    const handleFilter =(value:number)=>{
        const rating = [...filter.rating]
        const index = rating.findIndex((el)=> el===value)
        
        if(index != -1) rating.splice(index,1)
        else rating.push(value)

        dispatch(changeFilter({key:'rating', value:rating}))
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