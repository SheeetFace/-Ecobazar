import Button from '../../../../atoms/Button/Button';
import AllCategories from '../components/AllCategories/AllCategories';

import FilterIcon from '../../../../atoms/icon/navigate/FilterIcon';

import styles from '../FilterProducts/FilterProducts.module.scss';

import useToggleFilter from '../../../../../hooks/useToggleFilter';

const FilterProducts:React.FC = () => {

    const [, bodyClass,toggle] =useToggleFilter('')
    console.log('1231231')
    return (
        <section className={styles.FilterProducts}>
            
            <div className={styles._button} onClick={toggle}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth'
                        text='Filter'
                        type='button'
                        icon={<FilterIcon className=''/>}
                        
                        />
            </div>

            <div className={bodyClass}>
                <AllCategories isLoading={false}/>
            </div>

        </section>
    )
}

export default FilterProducts;