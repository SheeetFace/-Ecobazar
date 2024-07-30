import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useQueryDataByUserID } from "../../../../../hooks/db/order/useQueryDataByUserID";

import { selectOrdersStatus,selectOrderHistory,updateStatus,updateAllOrderHistory } from '../../../../../store/slices/orderHistorySlice';

import { firebaseGetUserOrdersService } from '../../../../../services/db/order/firebaseGetUserOrdersService';

import OrderDetailDashboardPageContent from "../OrderDetailDashboardPageContent/OrderDetailDashboardPageContent";
import FullScreenLoader from "../../../FullScreenLoader/FullScreenLoader";

import type { ResponseOrderDataType } from "../../../../../types/db/order/responseOrderDataType";


const OrderDetailDashboardPageWithHashData:React.FC<{hash:string}> = ({hash}) => {

    const navigate = useNavigate();

    const { queryData,isLoading} = useQueryDataByUserID<ResponseOrderDataType[]>(
        selectOrdersStatus,
        selectOrderHistory,
        firebaseGetUserOrdersService,
        updateStatus,
        updateAllOrderHistory,
    ) 

    const hashData = useMemo(()=>{
        if(queryData) return queryData.find((item:ResponseOrderDataType) => item.id === hash);
        return undefined
    },[queryData])

    useEffect(()=>{
        if(!queryData && !hashData) navigate('/dashboard')
    },[queryData,hashData])

    if(isLoading && !hashData) return <FullScreenLoader/>;
    if(hashData) return <OrderDetailDashboardPageContent data={hashData}/>;
    return null;
}

export default OrderDetailDashboardPageWithHashData;