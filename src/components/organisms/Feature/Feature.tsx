import FeatureCard from '../../molecules/card/FeatureCard/FeatureCard';

import styles from '../Feature/Feature.module.scss';


interface FeatureItem{
  icon:React.FC,
  title:string,
  description:string,
  
}
interface FeatureProps{
  data:FeatureItem[]
  className?:string
}

const Feature:React.FC<FeatureProps> = ({data,className=styles.Feature}) => {

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
    <section className={className}>
        {renderFeatureCard()}
    </section>
  )
}

export default Feature;