import { useState } from "react";

interface UsePagination<T> {
  totalItems:number
  currentPage:number
  totalPages:number
  goToNextPage:()=>void
  goToPrevPage:()=>void
  goToPage:(page:number)=>void
  startIndex:number
  endIndex:number
  displayedData: T[]|[]
}

type UsePaginationFunction= <T>(totalItems: number,itemsPerPage: number,data?: T[])=>UsePagination<T>;

  const usePagination: UsePaginationFunction = (totalItems, itemsPerPage, data) => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(totalItems/itemsPerPage);
     
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = data ? data.slice(startIndex, endIndex):[]
  
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
      totalItems,
      currentPage,
      totalPages,
      goToNextPage,
      goToPrevPage,
      goToPage,
      startIndex,
      endIndex,
      displayedData
    };
  };
  
  export default usePagination;