import styles from '../SaleUp/SaleUp.module.scss';

const SaleUp:React.FC = () => {

  return (
    <div className={styles.SaleUp}>
      <div className={styles._container}>

        <div className={styles._wrapperFresh}>
          <span>Fresh & Healthy</span>
          <span>Organic Food</span>
        </div>

      </div>
    </div>
  )
}

export default SaleUp;