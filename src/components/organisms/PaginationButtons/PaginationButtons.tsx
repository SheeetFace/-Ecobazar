import styles from '../PaginationButtons/PaginationButtons.module.scss';

import usePagination from '../../../hooks/usePagination';

interface PaginationButtonsProps {
    totalItems: number
    itemsPerPage: number
    valueCurrentPage: number
    onNextPage: () => void
    onPrevPage: () => void
    onGoToPage: (page: number) => void
}


const PaginationButtons: React.FC<PaginationButtonsProps> = ({ totalItems, itemsPerPage, valueCurrentPage, onNextPage, onPrevPage, onGoToPage }) => {

    const { totalPages } = usePagination(totalItems, itemsPerPage);

    const startPage = Math.max(1, valueCurrentPage - 1);
    const endPage = Math.min(totalPages, valueCurrentPage + 1);

    return (
        <div className={styles.PaginationButtons}>
            <button className={`${styles._arrow} defaultButtonStyle`} onClick={onPrevPage} disabled={valueCurrentPage === 1}>
                <span>&#11164;</span>
            </button>

            <div className={styles._wrapper}>


                {( totalItems < 1) && (
                    <button className={`${styles._currentPage} defaultButtonStyle`}>
                        1
                    </button>
                )}

                {valueCurrentPage  > 2  && (
                    <button className={`${styles._item} defaultButtonStyle`} onClick={() => onGoToPage(1)}>
                        1
                    </button>
                )}

                {valueCurrentPage > 3 && <span className={styles._dots}>...</span>}

                    {Array.from({ length: endPage - startPage + 1 },(_, i)=>{
                        const pageNumber = startPage + i;
                        const classs = valueCurrentPage === pageNumber ? styles._currentPage :null;

                        return(
                                <button className={`${styles._item} ${classs} defaultButtonStyle`}  
                                        key={pageNumber}
                                        onClick={() => onGoToPage(pageNumber)}>
                                    {pageNumber}
                                </button>
                        )
                    })}

                {endPage < totalPages - 1 && <span className={styles._dots}>...</span>}

                {endPage < totalPages && (
                    <button className={`${styles._item} defaultButtonStyle`} onClick={() => onGoToPage(totalPages)}>
                        {totalPages}
                    </button>
                )}

            </div>

            <button className={`${styles._arrow} defaultButtonStyle`} onClick={onNextPage} disabled={valueCurrentPage === totalPages || totalPages < 2}>
                <span>&#11166;</span>
            </button>
        </div>
    );
}

export default PaginationButtons;
