import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../../../../store/store';

import { firebaseAddOrderService } from '../../../../../../../services/db/order/firebaseAddOrderService';

import { useLoadingAndError} from '../../../../../../../hooks/useLoadingAndError';

import useOrderData from '../../../../../../../hooks/db/useOrderData';

import { resetFormState,setShippingInfo } from '../../../../../../../store/slices/checkoutFormSlice';
import { clearCart } from '../../../../../../../store/slices/cartSlice';
import { updateOneOrderHistory } from '../../../../../../../store/slices/orderHistorySlice';

import Button from '../../../../../../atoms/Button/Button';
import AlertMessage from '../../../../../../molecules/AlertMessage/AlertMessage';

import styles from '../SubmitOrderForm/SubmitOrderForm.module.scss';

import { SubmitOrderType } from '../../../../../../../types/db/order/submitOrderType';
import { ResponseOrderDataType } from '../../../../../../../types/db/order/responseOrderDataType';

interface OrderData{
    userID:string,
    data:SubmitOrderType
}


const SubmitOrderForm:React.FC = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const isFormReady = useAppSelector((state)=> state.checkoutForm.isFormReady);

    const orderData:OrderData|Error = useOrderData();

    const { executeAsync, renderLoaderOrError } = useLoadingAndError();

    const submitOrder = useCallback(async()=>{
        if(isFormReady){
            if(orderData instanceof Error){
                console.error('Error: ', orderData.message);
            }else{
                const { userID, data } = orderData;
                const res = await executeAsync(() => firebaseAddOrderService(userID, data)) as ResponseOrderDataType;
                if(res){
                    await Promise.all([
                        dispatch(updateOneOrderHistory(res)),
                        dispatch(resetFormState()),
                        dispatch(clearCart()),
                        dispatch(setShippingInfo([]))
                    ]);
                    
                    navigate('/dashboard/orderDetail',{state: {res}});
                }
            }
        }
    },[isFormReady, orderData, executeAsync, dispatch, navigate])

    return (
        <div className={styles.SubmitOrderForm}>
            <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth'
                    text='Proceed to checkout'
                    type='button'
                    disabled={!isFormReady}
                    onClick={()=>submitOrder()}/>

            {!isFormReady ?
                <AlertMessage type='warning'
                            title='NOTE'
                            message={<>Fill in the <b>Billing Information</b> and select a <b>Payment method</b></>}
                            isCanClose={false}/>
            :null}
            {renderLoaderOrError()}
        </div>
    )
}

export default SubmitOrderForm;