import { NavLink } from 'react-router-dom';

import Button from '../../../../../atoms/Button/Button';

import styles from '../LowFatMeat/LowFatMeat.module.scss';

const LowFatMeat:React.FC = () => {

    return (
        <section className={styles.LowFatMeat } aria-label="Low-Fat Meat Banner - 85% FAT FREE">
            <div className={styles._container}>

                <span className={styles._preTitle}>85% FAT FREE</span>

                <span className={styles._title}>Low-Fat Meat</span>

                <div className={styles._started}>
                    <span>Started at</span>
                    <span className={styles._price}>$79.99</span>
                </div>

                <div className={styles._wrapperButton}>
                    <NavLink to={'/shop'} className='_navLink _navLinkWidthMaxContent' aria-label='Go to Shop for Low-Fat Meat 85% FAT FREE'>
                        <Button className='ButtonFilledOval fillWhite colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
                    </NavLink>
                </div>

            </div>
        </section>
    )
}

export default LowFatMeat;