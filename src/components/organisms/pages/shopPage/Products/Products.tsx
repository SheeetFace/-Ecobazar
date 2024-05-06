import { useContext, useEffect, useMemo, useRef } from 'react';

import usePagination from '../../../../../hooks/usePagination';

import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';
import NotingFound from '../../../../atoms/NothingFound/NothingFound';
import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import { FilterContext } from '../../../../../context/FilterContext';
import { filterProducts } from '../../../../../utils/filterProducts';

import { shopProductData } from '../../../../../data/temp/shopProductData';

import styles from '../Products/Products.module.scss';

const Products:React.FC = () => {

    const { filter } = useContext(FilterContext);
    const filteredProducts = filterProducts(shopProductData, filter);

    const itemsPerPage= 24;
    const totalItems = filteredProducts.length;
  
    const{displayedData,currentPage,goToNextPage,goToPrevPage,goToPage}=usePagination(
      totalItems,
      itemsPerPage,
      filteredProducts
    );

    const productsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },[currentPage]);

    useEffect(()=>{
      if(filteredProducts.length<(currentPage*itemsPerPage)) goToPage(1)

    },[JSON.stringify(filteredProducts)])


    useEffect(()=>{
      if(productsRef.current){
        productsRef.current.classList.add(styles.productsFadeInOut);

        const timer = setTimeout(()=>{
          productsRef.current?.classList.remove(styles.productsFadeInOut);
        },600);

        return ()=>clearTimeout(timer);
      }
    }, [filter,currentPage]);

  
    const renderProductCard = useMemo(() => {

      if(filteredProducts.length===0) return <NotingFound/>
      
      return displayedData.map((item, i)=>(
          <ProductsCard
            key={i}
            name={item.name}
            src={item.src}
            id={item.id}
            currentCost={item.currentCost}
            oldCost={item.oldCost}
            sale={item.sale}
            rating={item.rating}

            promotedCategories={item.promotedCategories}
            weight={item.weight}
            color={item.color}
            type={item.type}
            category={item.category}
            stockStatus={item.stockStatus}
            date={item.date}
            tag={item.tag}
            description={item.description}
          />
      ));
    },[JSON.stringify(displayedData)])

    return (
            <section className={styles.Products}>

                <div className={styles._container}>
                  <div className={styles._cards} ref={productsRef}>
                    {renderProductCard}
                  </div>
                </div>
          
                <div className={styles._pagButtons}>
                  <PaginationButtons  totalItems={totalItems}
                                      itemsPerPage={itemsPerPage}
                                      valueCurrentPage={currentPage}
                                      onNextPage={goToNextPage}
                                      onPrevPage={goToPrevPage}
                                      onGoToPage={goToPage}
                  />
                </div>
            </section>
    )
}

export default Products;