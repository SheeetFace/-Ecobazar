import { useMemo } from 'react';

import usePagination from '../../../../../hooks/usePagination';
import { useQueryDataByUserID } from '../../../../../hooks/useQueryDataByUserID';

import { selectOrdersStatus,selectOrderHistory,updateStatus,updateAllOrderHistory } from '../../../../../store/slices/orderHistorySlice';

import { firebaseGetUserOrdersService } from '../../../../../services/db/order/firebaseGetUserOrdersService';

import HeaderOrderHistoryTable from '../../../../molecules/pages/components/HeaderOrderHistoryTable/HeaderOrderHistoryTable';
import OrderHistoryItemTable from '../../../../molecules/pages/components/OrderHistoryItemTable/OrderHistoryItemTable';
import NotingFound from '../../../../atoms/NothingFound/NothingFound';
import PaginationButtons from '../../../PaginationButtons/PaginationButtons';

import styles from '../OrderHistoryTable/OrderHistoryTable.module.scss'

import { ResponseOrderDataType } from '../../../../../types/db/order/responseOrderDataType';


const OrderHistoryTable: React.FC = () => {

    const { queryData, renderLoaderOrError} = useQueryDataByUserID<ResponseOrderDataType[]>(
      selectOrdersStatus,
      selectOrderHistory,
      firebaseGetUserOrdersService,
      updateStatus,
      updateAllOrderHistory
    ) 

    const itemsPerPage= 18;
    const totalItems = queryData.length;
  
    const {displayedData,currentPage,goToNextPage,goToPrevPage,goToPage} = usePagination(
        totalItems,
        itemsPerPage,
        queryData
    );

    const renderOrderHistoryItemTable = useMemo(() => {
      return displayedData.map((item) => {
        return <OrderHistoryItemTable
                        key={item.id}
                        {...item}
                />
      });
    },[queryData])
  
    return (
      <>
      <div className={styles.OrderHistoryTable}>
        
        <table >
          <HeaderOrderHistoryTable />
          {renderOrderHistoryItemTable}
        </table>
        {renderLoaderOrError()}
        {queryData.length ===0 ? <NotingFound message='Order History is Empty.'/> :null}

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