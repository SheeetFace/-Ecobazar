import { useRef, useEffect, useCallback } from 'react';

import Button from '../../../../atoms/Button/Button';
import WishlistIcon from '../../../../atoms/icon/navigate/WishlistIcon';

import styles from '../ButtonWishlist/ButtonWishlist.module.scss';

type TypeButtonStyle ='card'|'detail';
interface ButtonWishlistProps{
    id:string,
    type:TypeButtonStyle
}

const ButtonWishlist:React.FC<ButtonWishlistProps> = ({id, type}) => {

    //!lidl preparing

    // const wishlist = useStore(state => state.wishlist)
    // const wishlistRef = useRef(number|null)

    // useEffect(() => {
    //     wishlistRef.current = wishlist.some(item=> item.id === id)
    // }, [wishlist])

    // const getStyle =useCallback (()=>{
    //     let typeStyle:string;

    //     if(wishlistRef.current) typeStyle = type === 'card' ? styles._cardInWishList: styles._detailInWishList;

    //     typeStyle = type === 'card' ? styles._cardNotInWishList: styles._detailNotInWishList;
        
    //     return typeStyle;

    // },[wishlistRef.current])


    const updateWishlist =(id:string,e:React.MouseEvent)=>{
        e.preventDefault()
        // add or remove id to zustand state IN ANOTHER FILE
    }

    const typeStyle=type === 'card' ? styles._cardNotInWishList: styles._detailNotInWishList;

    return (
        <div className={`${styles.ButtonWishlist} ${typeStyle}`}
             onClick={(e)=>updateWishlist(id,e)}>
         {/* <div className={`${styles.ButtonWishlist} ${getStyle}`}> */}
            <Button className='ButtonTransparent' 
                    icon={<WishlistIcon className={styles._buttonWishlistIcon}/>}
                    // onClick={(e)=>updateWishlist(id,e)} 
                    type='button'/>
        </div>
  )
}

export default ButtonWishlist;

