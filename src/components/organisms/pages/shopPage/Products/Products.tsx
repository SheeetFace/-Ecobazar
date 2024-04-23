import { useContext, useEffect } from 'react';

import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import { FilterContext } from '../../../../../contexts/FilterContext';

import { shopProductData } from '../../../../../data/temp/shopProductData';

import styles from '../Products/Products.module.scss';

type TDate = 'latest'|'newest'|'oldest'

interface InitFilter{
    categoryValue:string
    price:{
        min:string
        max:string
    },
    rating:number[]
    tag:string
    date:TDate
}

const Products:React.FC = () => {

    const { filter } = useContext(FilterContext);

    const filterProducts = (products: ShopProduct[], filter: InitFilter): ShopProduct[] => {
      if (
        filter.categoryValue === '' &&
        filter.price.min === '' &&
        filter.price.max === '' &&
        filter.rating.length === 0 &&
        filter.tag === '' &&
        filter.date === 'latest'
      ) {
        return products;
      }
    
      const sortedProducts = [...products].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    
      const filteredProducts = sortedProducts.filter((product) => {
        const productDate = new Date(product.date);
    
        if (filter.categoryValue && product.category !== filter.categoryValue) {
          return false;
        }
    
        if (
          (filter.price.min && parseFloat(product.currentCost) < parseFloat(filter.price.min)) ||
          (filter.price.max && parseFloat(product.currentCost) > parseFloat(filter.price.max))
        ) {
          return false;
        }
    
        if (filter.rating.length && !filter.rating.includes(parseInt(product.rating))) {
          return false;
        }
    
        if (filter.tag && product.tag !== filter.tag) {
          return false;
        }
    
        return true; 
      });
    
      if (filter.date === 'latest') {
        return filteredProducts;
      } else if (filter.date === 'newest') {
        return filteredProducts.slice(0, Math.min(filteredProducts.length, 5));
      } else if (filter.date === 'oldest') {
        return filteredProducts.slice(-5);
      }
    
      return filteredProducts;
    };
    
    const renderProductCard = () => {
      const filteredProducts = filterProducts(shopProductData, filter);
      console.log(filteredProducts)
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