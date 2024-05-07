import { useContext, useEffect, useMemo, useRef } from 'react';

import usePagination from '../../../../../hooks/usePagination';
import useScrollToTop from '../../../../../hooks/useScrollToTop';
import useSmoothTransition from '../../../../../hooks/useSmoothTransition';
import useEnsureValidPage from '../../../../../hooks/useEnsureValidPage';

import BlogCard from '../../../../molecules/card/BlogCard/BlogCard';

import NotingFound from '../../../../atoms/NothingFound/NothingFound';
import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import { BlogFilterContext } from '../../../../../context/BlogFilterContext';

import { blogsData } from '../../../../../data/temp/blogsData';


import styles from '../Blogs/Blogs.module.scss';

const Blogs:React.FC = () => {

    const { filter, changeFilter } = useContext(BlogFilterContext);
    // const filteredProducts = filterProducts(shopProductData, filter);

    const filteredProducts = blogsData; //!temp

    const itemsPerPage= 6;
    const totalItems = blogsData.length;

    const blogsRef = useRef<HTMLDivElement>(null);

    const{displayedData,currentPage,goToNextPage,goToPrevPage,goToPage}=usePagination(
      totalItems,
      itemsPerPage,
      filteredProducts
    );

    useSmoothTransition(blogsRef, filter, currentPage);
    useScrollToTop(currentPage);
    // useEnsureValidPage(filteredProducts, currentPage, itemsPerPage, goToPage)

    useEffect(()=>{
      changeFilter('blogsLength',totalItems)
    },[totalItems])


    const renderBlogCards = useMemo(()=>{
        return displayedData.map((item,i)=>{
            return(
                    <div className={styles._card} key={i}>
                        <BlogCard   id={item.id}
                                    category={item.category}
                                    owner={item.owner}
                                    commentsCount={item.commentsCount}
                                    title={item.title}
                                    date={item.date}
                                    src={item.src}
                        />
                    </div>
            )
        })
    },[JSON.stringify(displayedData)])

    return (
        <section className={styles.Blogs}>
            <div className={styles._container}>
                  <div className={styles._cards} ref={blogsRef}>
                    {renderBlogCards}
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

export default Blogs;