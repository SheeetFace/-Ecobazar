import Button from '../../../../atoms/Button/Button';

import styles from '../BestDeal/BestDeal.module.scss';

const BestDeal:React.FC = () => {

  return (
    <div className={styles.BestDeal}>
            <div className={styles._container}>

                <span className={styles._title}>BEST DEAL</span>
                <span className={styles._description}>
                    Special Products 
                    <br/>
                    Deal Of The Month
                </span>

                <div className={styles._button}>
                    <Button className='ButtonTransparent colorTextGreenPrimary' type='button' text='Shop now &#10132;'/>
                </div>

            </div>
    </div>
  )
}

export default BestDeal;