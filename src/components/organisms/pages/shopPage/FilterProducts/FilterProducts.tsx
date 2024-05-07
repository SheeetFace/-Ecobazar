import Button from '../../../../atoms/Button/Button';
import ProductCategoriesFilter from '../components/ProductCategoriesFilter/ProductCategoriesFilter';
import PriceFilter from '../components/PriceFilter/PriceFilter';
import RatingFilter from '../components/RatingFilter/RatingFilter';
import ProductTagFilter from '../components/ProductTagFilter/ProductTagFilter';
import ProductClearFilter from '../components/ProductClearFilter/ProductClearFilter';

import FilterIcon from '../../../../atoms/icon/navigate/FilterIcon';

import styles from '../FilterProducts/FilterProducts.module.scss';

import useToggleFilter from '../../../../../hooks/useToggleFilter';


const FilterProducts: React.FC = () => {
    const [, bodyClass, toggle] = useToggleFilter("");

    return (
      <section className={styles.FilterProducts}>
        <div className={styles._button} onClick={toggle}>
          <Button
            className="ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight"
            text="Filter"
            type="button"
            icon={<FilterIcon className="" />}
          />
        </div>
  
        <div className={bodyClass}>
          <ProductCategoriesFilter />
        </div>
  
        <div className={bodyClass}>
          <PriceFilter />
        </div>

        <div className={bodyClass}>
          <RatingFilter />
        </div>

        <div className={bodyClass}>
          <ProductTagFilter />
        </div>

        <div className={bodyClass}>
          <ProductClearFilter />
        </div>
      </section>
    );
  };
  
  export default FilterProducts;