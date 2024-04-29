import { NavLink } from 'react-router-dom';

import ShoppingCartCard from '../../../../molecules/card/ShoppingCartCard/ShoppingCartCard';
import Divider from '../../../../atoms/Divider/Divider';
import Button from '../../../../atoms/Button/Button';

import { popularProductsData } from '../../../../../data/temp/popularProductsData';

import styles from '../ShoppingCart/ShoppingCart.module.scss';

const ShoppingCart:React.FC = () => {

    const renderShoppingCartCard = ()=>{
        const length = popularProductsData.length

        return popularProductsData.map((item,i)=>{
            return(
                <ShoppingCartCard
                            key={i}
                            name={item.name}
                            id={item.id}
                            src={item.src}
                            currentCost={item.currentCost}
                            oldCost={item.oldCost}
                            isLast={length ===i}
                />
            )
        })
    }

    return (
        <section className={styles.ShoppingCart}>
            
            <div className={styles._header}>
                <div className={styles._product}>
                    <span>PRODUCT</span>
                </div>
                <div className={styles._cost}>
                    <span>PRICE</span>
                </div>
                <div className={styles._quantity}>
                    <span>QUANTITY</span>
                </div>
                <div className={styles._subtotal}>
                    <span>SUBTOTAL</span>
                </div>
            </div>

            <Divider type='horizontal' className={styles._divider}/>

            <div className={styles._cardContainer}>
                {renderShoppingCartCard()}
            </div>

            <Divider type='horizontal' className={styles._divider}/>

            <NavLink to='shop' className={styles._navLink}>
                <Button className='ButtonFilledOval fillGrey1 colorTextGrey7 buttonMaxHeight'
                        text='Return to Shop'
                        type='button'
                        />
            </NavLink>

        </section>
    )
}

export default ShoppingCart;