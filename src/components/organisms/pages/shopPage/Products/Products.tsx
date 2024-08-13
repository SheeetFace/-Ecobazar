import { useEffect, useMemo, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import useApiResource from '../../../../../hooks/api/useApiResource';
import { useGetProductsQuery } from '../../../../../api/products/productApi';

import { useAppDispatch,useAppSelector } from '../../../../../store/store';
import { changeFilter } from '../../../../../store/slices/productFilterSlice';
import { setPriceRange } from '../../../../../store/slices/priceRangeSlice';

import { filterProducts } from '../../../../../utils/filter/filterProducts';
import { calculatePriceRange } from '../../../../../utils/calculatePriceRange';

import usePagination from '../../../../../hooks/usePagination';
import useSmoothTransition from '../../../../../hooks/useSmoothTransition';
import useScrollToTop from '../../../../../hooks/useScrollToTop';
import useEnsureValidPage from '../../../../../hooks/useEnsureValidPage';
import useResponsivePagination  from '../../../../../hooks/useResponsivePagination';

import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';
import NotingFound from '../../../../atoms/NothingFound/NothingFound';
import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import styles from '../Products/Products.module.scss';

import type { ProductDataType } from '../../../../../types/product/productDataTypes';

type Breakpoint = {[key: number]:number}

const paginationConfig: Breakpoint[] = [
  { 1917: 21 },
  { 1371: 12 },
  { 920: 6 }
]

const Products:React.FC = () => {

    const {responseData, content} = useApiResource<ProductDataType>(useGetProductsQuery, 'products')

    const dispatch = useAppDispatch()
    const filter = useAppSelector((state)=> state.productFilter)

    const filteredProducts = filterProducts((responseData ?? []), filter);
    const itemsPerPage= useResponsivePagination({ defaultItems: 24, breakpoints: paginationConfig });

    const location = useLocation();

    const totalItems = filteredProducts.length;

    const productsRef = useRef<HTMLDivElement>(null);

    const{displayedData,currentPage,goToNextPage,goToPrevPage,goToPage}=usePagination(
      totalItems,
      itemsPerPage,
      filteredProducts
    );

    useSmoothTransition(productsRef, filter, currentPage);
    useScrollToTop(currentPage);
    useEnsureValidPage(filteredProducts, currentPage, itemsPerPage, goToPage, filter)

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

    useEffect(()=>{
      const priceRange = calculatePriceRange(responseData?? [])
      dispatch(setPriceRange(priceRange))
    },[responseData])
    
    const renderProductCard = useMemo(() => {
      if(filteredProducts.length===0) return <NotingFound/>
      
      return displayedData.map((item)=>(<ProductsCard key={item.id} {...item}/>));

    },[JSON.stringify(displayedData)])

    return (
            <section className={styles.Products}>

              <div className={styles._container}>
                <div className={styles._cards} ref={productsRef}>
                  {content}
                  {responseData ?renderProductCard:null}
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