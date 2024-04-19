import Button from '../../../../atoms/Button/Button';
import AllCategoriesFilter from '../components/AllCategoriesFilter/AllCategoriesFilter';
import PriceFilter from '../components/PriceFilter/PriceFilter';

import FilterIcon from '../../../../atoms/icon/navigate/FilterIcon';

import styles from '../FilterProducts/FilterProducts.module.scss';

import useToggleFilter from '../../../../../hooks/useToggleFilter';
import useFilter from '../../../../../hooks/useFilter';

// const FilterProducts:React.FC = () => {

//     const [, bodyClass,toggle] =useToggleFilter('')
//     const [filter,] =useFilter()

//     return (
//         <section className={styles.FilterProducts}>
            
//             <div className={styles._button} onClick={toggle}>
//                 <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth'
//                         text='Filter'
//                         type='button'
//                         icon={<FilterIcon className=''/>}
                        
//                         />
//             </div>

//             <div className={bodyClass}>
//                 <AllCategoriesFilter isLoading={false}/>
//             </div>

//             <div className={bodyClass}>
//               <PriceFilter/>
//             </div>

//             <button style={{width:'100px',height:'100px'}} onClick={()=>console.log(filter)}>1231</button>

//         </section>
//     )
// }

// export default FilterProducts;

import { useState, useEffect } from 'react';

const FilterProducts: React.FC = () => {
    const [, bodyClass, toggle] = useToggleFilter("");
    const [filter,] = useFilter();

useEffect(()=>{
    console.log(filter)
},[filter])

    return (
      <section className={styles.FilterProducts}>
        <div className={styles._button} onClick={toggle}>
          <Button
            className="ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth"
            text="Filter"
            type="button"
            icon={<FilterIcon className="" />}
          />
        </div>
  
        <div className={bodyClass}>
          <AllCategoriesFilter isLoading={false} />
        </div>
  
        <div className={bodyClass}>
          <PriceFilter />
        </div>
  
        <button onClick={() => console.log(filter)}>Log Filter</button>
        {/* <button onClick={fn}>{count}</button> */}
      </section>
    );
  };
  
  export default FilterProducts;