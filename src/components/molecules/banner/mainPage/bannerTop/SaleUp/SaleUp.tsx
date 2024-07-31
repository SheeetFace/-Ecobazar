import { NavLink } from 'react-router-dom';

import LabelBadge from '../../../../../atoms/LabelBadge/LabelBadge';
import Button from '../../../../../atoms/Button/Button';

import styles from '../SaleUp/SaleUp.module.scss';

const SaleUp:React.FC = () => {

  return (
    <section className={styles.SaleUp} aria-label="Fresh & Healthy Banner - Sale up to 30% OFF">
      <div className={styles._container}>

        <div className={styles._wrapperFresh}>
          <span>Fresh & Healthy</span>
          <span>Organic Food</span>
        </div>
        
        <div className={styles._wrapperCenter}>
          <div className={styles._saleUpTo}>
            <span>Sale up to</span>
            <LabelBadge className={styles._label} label='30% OFF'/>
          </div>
          <span className={styles._description}>Free shipping on all your order.</span>
        </div>
        
        <div className={styles._wrapperButton}>
          <NavLink to={'/shop'} className='_navLink _navLinkWidthMaxContent' aria-label='Go to Shop for 30% OFF Organic Food'>
            <Button className='ButtonFilledOval fillWhite colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
          </NavLink>
        </div>

      </div>
    </section>
  )
}

export default SaleUp;