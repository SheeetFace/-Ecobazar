import FeatureCard from '../../molecules/card/FeatureCard/FeatureCard';

import styles from '../Feature/Feature.module.scss';


interface FeatureItem{
  icon:React.FC,
  title:string,
  description:string,
}
interface FeatureProps{
  data:FeatureItem[]
}

const Feature:React.FC<FeatureProps> = ({data}) => {

  const renderFeatureCard =()=>{
    return data.map((item:FeatureItem,i:number)=>{
      return(
        <FeatureCard     
                    icon={<item.icon/>}
                    title={item.title}
                    description={item.description}
                    iconClassName=''
                    titleClassName=''
                    descriptionClassName={styles._description}
                    key={i}
        />
      )
    })
  }

  return (
    <section className={styles.Feature}>
        {renderFeatureCard()}
    </section>
  )
}

export default Feature;