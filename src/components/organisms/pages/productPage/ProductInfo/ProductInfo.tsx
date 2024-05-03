import { useCallback, useMemo, useState } from 'react';

import Divider from '../../../../atoms/Divider/Divider';
import InfoButton from '../../../../molecules/pages/productPage/InfoButton/InfoButton';
import Description from '../../../../molecules/pages/productPage/Description/Description';
import VideoAndFeature from '../components/VideoAndFeature/VideoAndFeature';
import AdditionalInformation from '../../../../molecules/pages/productPage/AdditionalInformation/AdditionalInformation';
import CustomerFeedback from '../../../../molecules/pages/productPage/CustomerFeedback/CustomerFeedback';

import styles from '../ProductInfo/ProductInfo.module.scss';

interface ProductAdditionInfo {
    weight: string
    color: string
    type: string
    category: string
    stockStatus: string
    tag: string[]
}
interface ProductInfoProps{
    data: ProductAdditionInfo
}

enum ButtonContent{
    DESCRIPTION='Description',
    ADDITION='Addition Information',
    FEEDBACK='Customer Feedback'
}

const ProductInfo:React.FC<ProductInfoProps> = ({data}) => {

    const [buttonContent, setButtonContent] =useState<ButtonContent>(ButtonContent.DESCRIPTION)

    const buttons = Object.values(ButtonContent)

    const renderButtons = useMemo(()=>{
        return buttons.map((item,i)=>{
            return(
                <InfoButton
                    text={item}
                    isSelected={buttonContent === item}
                    changeFn={() => setButtonContent(item)}
                    key={i}
                /> 
            )
        })
    },[buttons])

    const returnContent = useCallback(()=>{

        let content:JSX.Element;

        switch(buttonContent){
            case (ButtonContent.DESCRIPTION):
                 content = <Description/>
                 break;
            case (ButtonContent.ADDITION):
                 content = <AdditionalInformation data={data}/>
                 break;
            case (ButtonContent.FEEDBACK):
                 content = <CustomerFeedback/>
                 break;
            default:
                content = <Description/>
        }

        return content
        
    },[buttonContent])

    return (
        <section className={styles.ProductInfo}>
           
            <div className={styles._buttons}>
                {renderButtons}
              
            </div>
            <Divider type='horizontal' className={styles._divider}/>

            <div className={styles._container}>
                {returnContent()}
                <VideoAndFeature/>
            </div>
        </section>
    )
}

export default ProductInfo;