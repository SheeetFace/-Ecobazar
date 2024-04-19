import { useMemo, memo } from 'react';

import ReactSlider from 'react-slider'
import Divider from '../../../../../atoms/Divider/Divider';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';
import useFilter from '../../../../../../hooks/useFilter';



import styles from '../PriceFilter/PriceFilter.module.scss';

const PriceFilter:React.FC = () => {

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._container)
    const [filter, changeNewFilter] =useFilter()

    const handleFilter =(value:number[])=>{
        // console.log(value)
        const newPrice = {  
                            min:value[0].toString(),
                            max:value[1].toString()
                         }

        changeNewFilter('price',newPrice)
    }

    return (
        <section className={styles.PriceFilter}>
            <div className={styles._header}>
                <h2>Price</h2>
                <h1 className={arrowClass} onClick={toggle}>
                    &#11165;
                </h1>
            </div>

            <div className={bodyClass}>

                <ReactSlider
                    className={styles._horizontalSlider}
                    thumbClassName={styles._thumb}
                    trackClassName={styles._track}
                    defaultValue={[0, 100]}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={10}
                    onAfterChange={(value)=>handleFilter(value)}
                />
                <div>
                    <span>Price: {filter.price.min} - {filter.price.max} </span>
                </div>
            </div>

            <Divider type='horizontal' className={styles._divider}/>
        </section>
    )
}

export default PriceFilter;