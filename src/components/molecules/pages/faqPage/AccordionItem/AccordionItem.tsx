import { useState } from 'react';

import styles from '../AccordionItem/AccordionItem.module.scss';

interface AccordionItemProps{
    question:string
    answer:string
}

const AccordionItem:React.FC<AccordionItemProps> = ({question,answer}) => {

    const [isClick, setIsClick] =useState<boolean>(false);

    const handleClick = ()=>{
        setIsClick(isClick => !isClick)
    }

    const arrowClass = isClick ? styles._rotate : styles._default;
    const bodyClass = isClick ? styles._appear : styles._disappear;

    return (
        <div className={styles.AccordionItem}>
            <div className={styles._header}>
                <span>{question}</span>
                <div className={styles._arrow} onClick={handleClick}>
                    <span className={arrowClass}>&#10217;</span>
                </div>
            </div>

            <div className={bodyClass}>
                <div className={styles._body}>
                    <span>{answer}</span>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;