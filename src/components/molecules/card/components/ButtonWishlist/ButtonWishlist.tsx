import { useMemo, memo } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../../store/store';

import { toggleWishlistItem } from '../../../../../store/slices/wishlistSlice';

import Button from '../../../../atoms/Button/Button';
import WishlistIcon from '../../../../atoms/icon/navigate/WishlistIcon';

import styles from '../ButtonWishlist/ButtonWishlist.module.scss';

import type { MouseEvent } from 'react';

type TypeButtonStyle ='card'|'detail';
interface ButtonWishlistProps{
    id:string,
    type:TypeButtonStyle
    ariaLabel:string
}

const ButtonWishlist:React.FC<ButtonWishlistProps> = ({id, type,ariaLabel=''}) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const isItemInWishlist = useAppSelector((state)=> state.wishlist.items.includes(id));

    const isUser = useAppSelector((state)=> state.auth.isUser)

    const inWishlistStyle = type === 'card' ? styles._cardInWishList : styles._detailInWishList;
    const notInWishlistStyle = type === 'card' ? styles._cardNotInWishList : styles._detailNotInWishList;

    const inWishlistStyleIcon = isItemInWishlist ? styles._iconInWishList :styles._iconNotInWishList;
  
    const typeStyle = useMemo(()=>{
      return isItemInWishlist ? inWishlistStyle : notInWishlistStyle;
    },[isItemInWishlist, inWishlistStyle, notInWishlistStyle])

    const updateWishlist =(id:string,e:MouseEvent)=>{
        e.preventDefault()

        if(isUser) dispatch(toggleWishlistItem(id))
        else navigate('/login')
    }

    return (
        <div className={`${styles.ButtonWishlist} ${typeStyle}`}>
            <Button  className='ButtonTransparentWithoutHover buttonMaxWidth buttonMaxHeight'
                    icon={<WishlistIcon className={`${styles._buttonWishlistIcon} ${inWishlistStyleIcon}`}/>}
                    type='button'
                    ariaLabel={ariaLabel}
                    onClick={(e)=>updateWishlist(id,e)}/>
        </div>
    )
}

export default memo(ButtonWishlist);