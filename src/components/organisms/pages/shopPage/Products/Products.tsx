import { useContext, useEffect } from 'react';

import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';
import NotingFound from '../../../../atoms/NothingFound/NothingFound';

import { FilterContext } from '../../../../../contexts/FilterContext';
import { filterProducts } from '../../../../../utils/filterProducts';

import { shopProductData } from '../../../../../data/temp/shopProductData';

import styles from '../Products/Products.module.scss';

const Products:React.FC = () => {

    const { filter } = useContext(FilterContext);

    const renderProductCard = () => {

      const filteredProducts = filterProducts(shopProductData, filter);

      if(filteredProducts.length===0) return <NotingFound/>
       
      return filteredProducts.map((item, i) => (
          <ProductsCard
            key={i}
            name={item.name}
            src={item.src}
            id={item.id}
            currentCost={item.currentCost}
            oldCost={item.oldCost}
            sale={item.sale}
            rating={item.rating}
          />
      ));
    };

    useEffect(() => {
      console.log('Updated filter:', filter);
    }, [filter]);

    return (
            <section className={styles.Products}>
                {renderProductCard()}
            </section>
    )
}

export default Products;