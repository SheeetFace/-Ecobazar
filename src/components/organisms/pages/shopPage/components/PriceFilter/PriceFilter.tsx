import { memo, useContext } from 'react';

import useToggleFilter from '../../../../../../hooks/useToggleFilter';
import { FilterContext } from '../../../../../../context/FilterContext';

import ReactSlider from 'react-slider'
import Divider from '../../../../../atoms/Divider/Divider';

import styles from '../PriceFilter/PriceFilter.module.scss';

const PriceFilter:React.FC = () => {

    const [arrowClass, bodyClass,toggle] =useToggleFilter(styles._container)
    const {filter, changeFilter } = useContext(FilterContext);

    const handleFilter =(value:number[])=>{
        const newPrice = {  
                            min:value[0].toString(),
                            max:value[1].toString()
                         }

        changeFilter('price',newPrice)
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
                min={0}
                max={100}
                defaultValue={filter.price.min ? [+filter.price.min, +filter.price.max] : [0, 100]}
                value={filter.price.min ? [+filter.price.min, +filter.price.max] : [0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                pearling
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                renderTrack={(props, state) => (
                    <div
                        {...props}
                        className={state.index === 1 ? styles._activeTrack : styles._track}
                    ></div>
                )}
                minDistance={5}
                onAfterChange={(value) => handleFilter(value)}
            />
                <div>
                    <span>Price:&nbsp;
                        {filter.price.min ? filter.price.min :0} 
                        &nbsp;-&nbsp; 
                        {filter.price.max ? filter.price.max :100}
                    </span>
                </div>

                <Divider type='horizontal' className={styles._divider}/>
            </div>


        </section>
    )
}

export default memo(PriceFilter);