import { NavLink } from 'react-router-dom';

import Button from '../../../../../atoms/Button/Button';

import styles from '../BestDeal/BestDeal.module.scss';

const BestDeal:React.FC = () => {

  return (
    <section className={styles.BestDeal} aria-label="BEST DEAL Banner - Special Products">
      <div className={styles._container}>

          <span className={styles._title}>BEST DEAL</span>
          <span className={styles._description}>
              Special Products 
              <br/>
              Deal Of The Month
          </span>

          <div className={styles._button}>
            <NavLink to={'/shop'} className='_navLink _navLinkWidthMaxContent' aria-label='Go to Shop for Special Products'>
              <Button className='ButtonTransparent colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
            </NavLink>
          </div>

      </div>
    </section>
  )
}

export default BestDeal;