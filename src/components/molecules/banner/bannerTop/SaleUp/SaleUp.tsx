import LabelBadge from '../../../../atoms/LabelBadge/LabelBadge';
import Button from '../../../../atoms/Button/Button';

import styles from '../SaleUp/SaleUp.module.scss';

const SaleUp:React.FC = () => {

  return (
    <div className={styles.SaleUp}>

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
          <Button className='ButtonFilledOval fillWhite colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
        </div>

      </div>
      
    </div>
  )
}

export default SaleUp;