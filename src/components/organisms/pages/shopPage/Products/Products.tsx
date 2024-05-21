import { useContext, useEffect, useMemo, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import usePagination from '../../../../../hooks/usePagination';
import useSmoothTransition from '../../../../../hooks/useSmoothTransition';
import useScrollToTop from '../../../../../hooks/useScrollToTop';
import useEnsureValidPage from '../../../../../hooks/useEnsureValidPage';

import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';
import NotingFound from '../../../../atoms/NothingFound/NothingFound';
import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import { ProductFilterContext } from '../../../../../context/ProductFilterContext';
import { filterProducts } from '../../../../../utils/filter/filterProducts';

import { shopProductData } from '../../../../../data/temp/shopProductData';

import styles from '../Products/Products.module.scss';

const Products:React.FC = () => {

    const { filter, changeFilter } = useContext(ProductFilterContext);

    const filteredProducts = filterProducts(shopProductData, filter);
    const location = useLocation();
    // console.log(location.state.searchFilter)
    const itemsPerPage= 24;
    const totalItems = filteredProducts.length;

    const productsRef = useRef<HTMLDivElement>(null);

    const{displayedData,currentPage,goToNextPage,goToPrevPage,goToPage}=usePagination(
      totalItems,
      itemsPerPage,
      filteredProducts
    );

    useSmoothTransition(productsRef, filter, currentPage);
    useScrollToTop(currentPage);
    useEnsureValidPage(filteredProducts, currentPage, itemsPerPage, goToPage)

    useEffect(()=>{
      changeFilter('productsLength',totalItems)
    },[totalItems])

    useEffect(()=>{
      if(location.state && ('searchFilter' in location.state)){
        changeFilter('search',location.state.searchFilter)
      }
    },[location.state])


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