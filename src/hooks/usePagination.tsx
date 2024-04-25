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
  displayedData: T[]
}

type UsePaginationFunction = <T>(
  totalItems: number,
  itemsPerPage: number,
  data?: T[]
) => UsePagination<T>;


// const usePagination = (totalItems:number,itemsPerPage:number, data?:any[]) => {
  const usePagination: UsePaginationFunction = (totalItems, itemsPerPage, data) => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(totalItems/itemsPerPage);
     
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let displayedData =[];
    // const displayedData: T extends null | undefined ? T[] : T = data ? data.slice(startIndex, endIndex) : [];

    if(data && totalPages) displayedData = data.slice(startIndex, endIndex);
  
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