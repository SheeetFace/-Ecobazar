import HeaderOrderHistoryTable from '../../../../molecules/pages/components/HeaderOrderHistoryTable/HeaderOrderHistoryTable';
import OrderHistoryItemTable from '../../../../molecules/pages/components/OrderHistoryItemTable/OrderHistoryItemTable';

import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import { orderHistoryData } from '../../../../../data/temp/orderHistoryData';

import styles from '../OrderHistoryTable/OrderHistoryTable.module.scss'

import usePagination from '../../../../../hooks/usePagination';


const OrderHistoryTable: React.FC = () => {

    const itemsPerPage= 18;
    const totalItems = orderHistoryData.length;
  
    const {currentPage,goToNextPage,goToPrevPage,goToPage,startIndex,endIndex} = usePagination(
        totalItems,
        itemsPerPage
    );

    const displayedData = orderHistoryData.slice(startIndex, endIndex);
  
    const renderOrderHistoryItemTable = () => {
      return displayedData.map((item, i) => {
        return (
          <OrderHistoryItemTable
            key={i}
            id={item.id}
            date={item.date}
            price={item.price}
            status={item.status}
          />
        );
      });
    };
  
    return (
      <>
      <div className={styles.OrderHistoryTable}>
        <table >
          <HeaderOrderHistoryTable />
          {renderOrderHistoryItemTable()}
        </table>
        
      </div>

      <div className={styles._pagButtons}>
          <PaginationButtons
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              valueCurrentPage={currentPage}
              onNextPage={goToNextPage}
              onPrevPage={goToPrevPage}
              onGoToPage={goToPage}
          />
        </div>
      </>
    );
  };
  
  export default OrderHistoryTable;