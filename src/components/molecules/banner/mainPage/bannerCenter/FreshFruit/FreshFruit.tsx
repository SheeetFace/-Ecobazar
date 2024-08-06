import { NavLink } from 'react-router-dom';

import Button from '../../../../../atoms/Button/Button';
import LabelBadge from '../../../../../atoms/LabelBadge/LabelBadge';

import styles from '../FreshFruit/FreshFruit.module.scss';

const FreshFruit:React.FC = () => {

    return (
        <section className={styles.FreshFruit} aria-label="Summer Sale Banner - 100% Fresh Fruit">
            <div className={styles._container}>

                <span className={styles._preTitle}>SUMMER SALE</span>

                <span className={styles._title}>100% Fresh Fruit</span>

                <div className={styles._upTo}>
                    <span>Up to</span>
                    <LabelBadge label='63% OFF' className={styles._label}/>
                </div>

                <div className={styles._wrapperButton}>
                    <NavLink to={'/shop'} className='_navLink _navLinkWidthMaxContent' aria-label='Go to Shop for 100% Fresh Fruit'>
                        <Button className='ButtonFilledOval fillWhite colorTextGreenPrimary buttonMaxHeight' type='button' text='Shop now &#10132;'/>
                    </NavLink>
                </div>

            </div>
        </section>
    )
}

export default FreshFruit;