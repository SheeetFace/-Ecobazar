import Button from '../../../../atoms/Button/Button';
import AllCategories from '../components/AllCategories/AllCategories';

import FilterIcon from '../../../../atoms/icon/navigate/FilterIcon';

import styles from '../FilterProducts/FilterProducts.module.scss';

const FilterProducts:React.FC = () => {

    return (
        <section className={styles.FilterProducts}>
            
            <div className={styles._button}>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth'
                        text='Filter'
                        type='button'
                        icon={<FilterIcon className=''/>}
                        />
            </div>

            <AllCategories isLoading={false}/>

        </section>
    )
}

export default FilterProducts;