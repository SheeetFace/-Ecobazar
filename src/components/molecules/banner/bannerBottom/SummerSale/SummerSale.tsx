import Button from '../../../../atoms/Button/Button';

import styles from '../SummerSale/SummerSale.module.scss';

const SummerSale:React.FC = () => {

    return (
        <section className={styles.SummerSale}>
            <div className={styles._container}>
                <div className={styles._wrapper}>

                    <span className={styles._title}>SUMMER SALE</span>
                    <div className={styles._discount}>
                        <span className={styles._percent}>37%</span>
                        <span>OFF</span>
                    </div>

                    <span className={styles._description}>
                        Free on all your order, Free Shipping and  30 days money-back guarantee
                    </span>

                    <div className={styles._wrapperButton}>
                        <Button className='ButtonFilledOval fillGreen colorTextGrey1' type='button' text='Shop now &#10132;'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SummerSale;