import { useRef, useEffect, useCallback, useMemo, memo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../store/store';

import { toggleWishlistItem } from '../../../../../store/slices/wishlistSlice';

import Button from '../../../../atoms/Button/Button';
import WishlistIcon from '../../../../atoms/icon/navigate/WishlistIcon';

import styles from '../ButtonWishlist/ButtonWishlist.module.scss';

type TypeButtonStyle ='card'|'detail';
interface ButtonWishlistProps{
    id:string,
    type:TypeButtonStyle
}

const ButtonWishlist:React.FC<ButtonWishlistProps> = ({id, type}) => {

    const dispatch = useAppDispatch();

    const isItemInWishlist = useAppSelector((state)=> state.wishlist.items.includes(id));

    const inWishlistStyle = type === 'card' ? styles._cardInWishList : styles._detailInWishList;
    const notInWishlistStyle = type === 'card' ? styles._cardNotInWishList : styles._detailNotInWishList;

    const inWishlistStyleIcon = isItemInWishlist ? styles._iconInWishList :styles._iconNotInWishList;
  
    const typeStyle = useMemo(()=>{
      return isItemInWishlist ? inWishlistStyle : notInWishlistStyle;
    },[isItemInWishlist, inWishlistStyle, notInWishlistStyle])

    const updateWishlist =(id:string,e:React.MouseEvent)=>{
        e.preventDefault()
        dispatch(toggleWishlistItem(id))
    }

    return (
        <div className={`${styles.ButtonWishlist} ${typeStyle}`}
             onClick={(e)=>updateWishlist(id,e)}>
            <Button  className='ButtonTransparentWithoutHover'
                    icon={<WishlistIcon className={`${styles._buttonWishlistIcon} ${inWishlistStyleIcon}`}/>}
                    type='button'/>
        </div>
    )
}

export default memo(ButtonWishlist);