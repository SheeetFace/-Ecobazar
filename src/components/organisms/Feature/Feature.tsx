import DeliveryTruckIcon from '../../atoms/icon/feature/DeliveryTruckIcon';
import HeadPhoneIcon from '../../atoms/icon/feature/HeadPhoneIcon';
import ShoppingBagIcon from '../../atoms/icon/feature/ShoppingBagIcon';
import PackageIcon from '../../atoms/icon/feature/PackageIcon';
import LeafIcon from '../../atoms/icon/feature/LeafIcon';
import StartIcon from '../../atoms/icon/feature/StartIcon';

import FeatureItem from '../../molecules/FeatureItem/FeatureItem';

import styles from '../Feature/Feature.module.scss';

interface FeatureProps{
    countFeatures: 4|6
}

const Feature:React.FC<FeatureProps> = ({countFeatures}) => {

  return (
    <section className={styles.Feature}>
        <FeatureItem    icon={<DeliveryTruckIcon/>}
                        title='Free Shipping'
                        description='Free shipping on all your order'
                        iconClassName=''
                        titleClassName=''
                        descriptionClassName={styles._description}
        />
        <FeatureItem    icon={<HeadPhoneIcon/>}
                        title='Customer Support 24/7'
                        description='Instant access to Support'
                        iconClassName=''
                        titleClassName=''
                        descriptionClassName={styles._description}
        />
        <FeatureItem    icon={<ShoppingBagIcon/>}
                        title='100% Secure Payment'
                        description='We ensure your money is save'
                        iconClassName=''
                        titleClassName=''
                        descriptionClassName={styles._description}
        />
        <FeatureItem    icon={<PackageIcon/>}
                        title='Money-Back Guarantee'
                        description='30 Days Money-Back Guarantee'
                        iconClassName=''
                        titleClassName=''
                        descriptionClassName={styles._description}
        />

        {countFeatures ===6 ?
        <>
            <FeatureItem    icon={<LeafIcon/>}
                            title='100% Organic Food'
                            description='100% healthy & Fresh food.'
                            iconClassName=''
                            titleClassName=''
                            descriptionClassName={styles._description}
            />
            <FeatureItem    icon={<StartIcon/>}
                            title='Customer Feedback'
                            description='Our happy customer'
                            iconClassName=''
                            titleClassName=''
                            descriptionClassName={styles._description}
            />
        </>
        :null}

    </section>
  )
}

export default Feature;