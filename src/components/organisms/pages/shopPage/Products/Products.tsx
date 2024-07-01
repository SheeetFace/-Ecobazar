import { useEffect, useMemo, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import { useAppDispatch,useAppSelector } from '../../../../../store/store';
import { changeFilter } from '../../../../../store/slices/productFilterSlice';

import usePagination from '../../../../../hooks/usePagination';
import useSmoothTransition from '../../../../../hooks/useSmoothTransition';
import useScrollToTop from '../../../../../hooks/useScrollToTop';
import useEnsureValidPage from '../../../../../hooks/useEnsureValidPage';

import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';
import NotingFound from '../../../../atoms/NothingFound/NothingFound';
import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import { filterProducts } from '../../../../../utils/filter/filterProducts';

// import { shopProductData } from '../../../../../data/temp/shopProductData';

import { useGetProductsQuery } from '../../../../../api/products/productApi';
import FullScreenLoader from '../../../FullScreenLoader/FullScreenLoader';
import AlertMessage from '../../../../molecules/AlertMessage/AlertMessage';

import styles from '../Products/Products.module.scss';

const Products:React.FC = () => {

    const {data, isLoading,isError} = useGetProductsQuery()
    console.log(isLoading)
    console.log(isError)

    const dispatch = useAppDispatch()
    const filter = useAppSelector((state)=> state.productFilter)

    // const filteredProducts = filterProducts(shopProductData, filter);

    const filteredProducts = filterProducts((data ?? []), filter);
    
    const location = useLocation();

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
      dispatch(changeFilter({key:'productsLength', value:totalItems}))
    },[totalItems])

    useEffect(()=>{
      if(location.state && ('searchFilter' in location.state)){
        dispatch(changeFilter({key:'search',value:location.state.searchFilter}))
      }
    },[location.state])

    useEffect(()=>{
      if(location.state && ('categoryFilter' in location.state)){
        dispatch(changeFilter({key:'categoryValue',value:location.state.categoryFilter}))
      }
    },[location.state])
    

    const renderProductCard = useMemo(() => {

      if(filteredProducts.length===0) return <NotingFound/>
      
      return displayedData.map((item, i)=>(
          <ProductsCard
            key={i}
              {...item}
          />
      ));
    },[JSON.stringify(displayedData)])


  if(isLoading) return <FullScreenLoader/>;
  

  if(data && !isError && data.length === 0 ) return <NotingFound />;
  

  if(isError) return <AlertMessage type='error' message='DATA FETCH IS ERROR' title='FETCH ERROR' isCanClose={false}/> 
  

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