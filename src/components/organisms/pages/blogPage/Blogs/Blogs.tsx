import { useContext, useEffect, useMemo, useRef } from 'react';

import usePagination from '../../../../../hooks/usePagination';
import useScrollToTop from '../../../../../hooks/useScrollToTop';
import useSmoothTransition from '../../../../../hooks/useSmoothTransition';
import useEnsureValidPage from '../../../../../hooks/useEnsureValidPage';

import { BlogFilterContext } from '../../../../../context/BlogFilterContext';

import { filterBlogs } from '../../../../../utils/filter/filterBlogs';

import BlogCard from '../../../../molecules/card/BlogCard/BlogCard';

import NotingFound from '../../../../atoms/NothingFound/NothingFound';
import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import { blogsData } from '../../../../../data/temp/blogsData';


import styles from '../Blogs/Blogs.module.scss';

const Blogs:React.FC = () => {

    const { filter, changeFilter } = useContext(BlogFilterContext);
    const filteredBlogs = filterBlogs(blogsData, filter);

    const itemsPerPage= 6;
    const totalItems = filteredBlogs.length;

    const blogsRef = useRef<HTMLDivElement>(null);

    const{displayedData,currentPage,goToNextPage,goToPrevPage,goToPage}=usePagination(
      totalItems,
      itemsPerPage,
      filteredBlogs
    );

    useSmoothTransition(blogsRef, filter, currentPage);
    useScrollToTop(currentPage);
    useEnsureValidPage(filteredBlogs, currentPage, itemsPerPage, goToPage)

    useEffect(()=>{
      changeFilter('blogsLength',totalItems)
    },[totalItems])


    const renderBlogCards = useMemo(()=>{

      if(filteredBlogs.length===0) return <NotingFound/>

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