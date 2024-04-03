import AccordionItem from '../../../../molecules/pages/faqPage/AccordionItem/AccordionItem';

import { faqData } from '../../../../../data/faq';

import styles from '../Accordion/Accordion.module.scss';

const Accordion:React.FC = () => {

    const renderAccordionItem=()=>{
        return faqData.map((item,i)=>{
            return(
                <AccordionItem  question={item.question}
                                answer={item.answer}
                                key={i}/>
            )

        })
    }

    return (
        <div className={styles.Accordion}>
            {renderAccordionItem()}
        </div>
    )
}

export default Accordion;