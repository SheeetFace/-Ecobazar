import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../../../../store/store';

import useTotalPrice from '../../../../../../../hooks/useTotalPrice';

import { resetFormState } from '../../../../../../../store/slices/checkoutFormSlice';
import { clearCart } from '../../../../../../../store/slices/cartSlice';
import { selectShippingInfo, setShippingInfo } from '../../../../../../../store/slices/checkoutFormSlice';
import { selectCartItemIDs } from '../../../../../../../store/slices/cartSlice';

import { formatDate } from '../../../../../../../utils/formatDate';

import Button from '../../../../../../atoms/Button/Button';
import AlertMessage from '../../../../../../molecules/AlertMessage/AlertMessage';

import styles from '../SubmitOrderForm/SubmitOrderForm.module.scss';

import { firebaseAddOrderService } from '../../../../../../../services/db/order/firebaseAddOrderService';

const SubmitOrderForm:React.FC = () => {

    const isFormReady = useAppSelector((state)=> state.checkoutForm.isFormReady);
    const shippingInfo = useAppSelector((state)=>selectShippingInfo(state))
    const userID = useAppSelector((state)=>state.auth.user?.uid)

    const productIDs = useAppSelector((state)=>selectCartItemIDs(state))

    const totalPrice = useTotalPrice()


    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const submitOrder =()=>{
        if(isFormReady && userID){
            //!
            firebaseAddOrderService( userID,{

                date:formatDate(new Date().toString(), 'normal'),
                shipping:shippingInfo,
                totalPrice,
                productIDs,
                method:'Pay Pal', //!
                status:"Completed"
            })
            dispatch(resetFormState())
            dispatch(clearCart())
            dispatch(setShippingInfo([]))
            navigate('/dashboard/orderDetail', 
                { state: 
                    {
                        id:"13",
                        date:"9 Sep, 2024",
                        price:"$135.00",
                        productCount:"5",
                        status:"Completed"
                    }
            });
        }
    }

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
        </div>
    )
}

export default SubmitOrderForm;