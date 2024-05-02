import { useCallback, useMemo, useState } from 'react';

import InfoButton from '../../../../molecules/pages/productPage/InfoButton/InfoButton';
import Description from '../../../../molecules/pages/productPage/Description/Description';
import VideoAndFeature from '../components/VideoAndFeature/VideoAndFeature';

import styles from '../ProductInfo/ProductInfo.module.scss';

enum ButtonContent{
    DESCRIPTION='Description',
    ADDITION='Addition Information',
    FEEDBACK='Customer Feedback'
}

const ProductInfo:React.FC = () => {

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
                 content = <Description/>
                 break;
            case (ButtonContent.FEEDBACK):
                 content = <Description/>
                 break;
            default:
                content = <Description/>
        }
        return content
        
    },[])

    return (
        <section className={styles.ProductInfo}>
            <div className={styles._buttons}>
                {renderButtons}
            </div>

            <div className={styles._container}>
                {returnContent()}
                <VideoAndFeature/>
            </div>
        </section>
    )
}

export default ProductInfo;