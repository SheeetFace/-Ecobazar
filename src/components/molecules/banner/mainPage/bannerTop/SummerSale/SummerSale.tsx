import Button from '../../../../../atoms/Button/Button';

import styles from '../SummerSale/SummerSale.module.scss';

const SummerSale:React.FC = () => {

  return (
    <div className={styles.SummerSale}>
        <div className={styles._container}>

            <span className={styles._title}>SUMMER SALE</span>
            <span className={styles._discount}>75% OFF</span>
            <span className={styles._description}>Only Fruit & Vegetable</span>
            
            <div className={styles._button}>
                <Button className='ButtonTransparent colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
            </div>

        </div>
    </div>
  )
}

export default SummerSale;