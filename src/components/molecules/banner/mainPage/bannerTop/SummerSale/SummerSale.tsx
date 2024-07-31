import { NavLink } from 'react-router-dom';

import Button from '../../../../../atoms/Button/Button';

import styles from '../SummerSale/SummerSale.module.scss';

const SummerSale:React.FC = () => {

  return (
    <section className={styles.SummerSale} aria-label="SUMMER SALE Banner - Sale up to 75% OFF">
        <div className={styles._container}>

            <span className={styles._title}>SUMMER SALE</span>
            <span className={styles._discount}>75% OFF</span>
            <span className={styles._description}>Only Fruit & Vegetable</span>
            
            <div className={styles._button}>
              <NavLink to={'/shop'} className='_navLink _navLinkWidthMaxContent' aria-label='Go to Shop for 75% OFF Fruit & Vegetable'>
                <Button className='ButtonTransparent colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
              </NavLink>
            </div>

        </div>
    </section>
  )
}

export default SummerSale;