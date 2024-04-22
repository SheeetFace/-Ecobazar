import Button from '../../../../atoms/Button/Button';
import AllCategoriesFilter from '../components/AllCategoriesFilter/AllCategoriesFilter';
import PriceFilter from '../components/PriceFilter/PriceFilter';

import FilterIcon from '../../../../atoms/icon/navigate/FilterIcon';

import styles from '../FilterProducts/FilterProducts.module.scss';

import useToggleFilter from '../../../../../hooks/useToggleFilter';


const FilterProducts: React.FC = () => {
    const [, bodyClass, toggle] = useToggleFilter("");

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
          <AllCategoriesFilter />
        </div>
  
        <div className={bodyClass}>
          <PriceFilter />
        </div>

      </section>
    );
  };
  
  export default FilterProducts;