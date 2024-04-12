import { useState } from "react";


const usePagination = (totalItems:number, itemsPerPage:number) => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(totalItems/itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const goToNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const goToPrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const goToPage = (page:number) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };
  
    return {
      currentPage,
      totalPages,
      goToNextPage,
      goToPrevPage,
      goToPage,
      startIndex,
      endIndex
    };
  };
  
  export default usePagination;