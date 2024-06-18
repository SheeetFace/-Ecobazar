import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormCheckoutContext } from '../../../../../../../context/FormCheckoutContext';

import Button from '../../../../../../atoms/Button/Button';
import AlertMessage from '../../../../../../molecules/AlertMessage/AlertMessage';

import styles from '../SubmitOrderForm/SubmitOrderForm.module.scss';

const SubmitOrderForm:React.FC = () => {

    const {isFormReady, resetFormState} = useContext(FormCheckoutContext);

    const navigate = useNavigate()

    const submitOrder =()=>{
        if(isFormReady){
            console.log('submitOrder')
            resetFormState()

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