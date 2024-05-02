import Button from '../../../atoms/Button/Button';
import ButtonWishlist from '../../card/components/ButtonWishlist/ButtonWishlist';
import Quantity from '../../card/components/Quantity/Quantity';

import CartIcon from '../../../atoms/icon/navigate/CartIcon';

import styles from '../ProductDetailsButtons/ProductDetailsButtons.module.scss';

import type { FormEvent } from 'react';


interface ProductDetailsButtonsProps{
    id:string
}

const ProductDetailsButtons:React.FC<ProductDetailsButtonsProps> = ({id}) => {

    // const countRef = useRef<number>(1)

    const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        // console.log( 'COUNT: ' +  `${countRef.current}`)
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className={styles.ProductDetailsButtons}>
                <Quantity 
                // countRef={countRef}
                />
                <ButtonWishlist id={id} type='card'/>

                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth buttonMaxHeight' type='submit' text=' Add to Cart' icon ={<CartIcon className={styles._icon}/>}/>
            </form>
        </div>
    )
}

export default ProductDetailsButtons;