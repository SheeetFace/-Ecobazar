import { useNavigate } from 'react-router-dom';

import { useAppDispatch,useAppSelector } from '../../../../store/store';

import { toggleCartItem } from '../../../../store/slices/cartSlice';
import { selectIsItemInCart } from '../../../../store/slices/cartSlice';

import Button from '../../../atoms/Button/Button';
import CartIcon from '../../../atoms/icon/navigate/CartIcon';

import styles from '../ButtonAddToCart/ButtonAddToCart.module.scss';

import type { MouseEvent } from 'react';

interface ButtonAddToCartProps{
    id:string
    isStockStatus:boolean
    isIcon?:boolean
    isText?:boolean
    isBadge?:boolean
    classNameIcon?:string
    ariaLabel?:string
}

const ButtonAddToCart:React.FC<ButtonAddToCartProps> = ({
    id,
    isStockStatus,
    isIcon=false,
    isText=true,
    isBadge=false,
    classNameIcon='',
    ariaLabel=''
    }) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const isCartAlreadyAdded = useAppSelector((state) =>selectIsItemInCart(state,id));

    const isUser = useAppSelector((state)=> state.auth.isUser)

    const buttonStyle = (isIcon ? isCartAlreadyAdded : !isCartAlreadyAdded) ? 'fillGreen colorTextGrey1':'fillSoftGreen colorTextGrey8';
    
    const showBadge =isCartAlreadyAdded && isBadge

    const handleToggleCart = (e:MouseEvent)=>{
        e.preventDefault()

        if(isUser) dispatch(toggleCartItem(id))
        else navigate('/login')
    }

    return (
        <>
            <Button className={`ButtonFilledOval buttonMaxHeight buttonMaxWidth ${buttonStyle}`}
                    text={isText? (!isCartAlreadyAdded ?'Add to Cart':'Already in Cart'):''}
                    type='submit'
                    icon ={isIcon && <CartIcon className={`${classNameIcon} ${styles._icon}`}/>}
                    disabled={!isStockStatus}
                    onClick={(e:MouseEvent)=>handleToggleCart(e)}
                    ariaLabel={ariaLabel}
            />
            {showBadge &&
                <div className={styles._CheckCircleIcon}>
                    <span>&#10004;</span>
                </div>
            }
        </>
    )
}

export default ButtonAddToCart;