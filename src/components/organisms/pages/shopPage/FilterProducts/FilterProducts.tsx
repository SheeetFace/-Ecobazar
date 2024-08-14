import ProductCategoriesFilter from '../components/ProductCategoriesFilter/ProductCategoriesFilter';
import PriceFilter from '../components/PriceFilter/PriceFilter';
import RatingFilter from '../components/RatingFilter/RatingFilter';
import ProductTagFilter from '../components/ProductTagFilter/ProductTagFilter';
import ProductClearFilter from '../components/ProductClearFilter/ProductClearFilter';
import ButtonToggleFilter from '../../../../molecules/button/ButtonToggleFilter/ButtonToggleFilter';

import styles from '../FilterProducts/FilterProducts.module.scss';

import useToggleFilter from '../../../../../hooks/useToggleFilter';


const FilterProducts: React.FC = () => {
    const [, bodyClass, toggle] = useToggleFilter("");

    return (
      <section className={styles.FilterProducts}>
        <div className={styles._button} >
          <ButtonToggleFilter toggle={toggle}/>
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