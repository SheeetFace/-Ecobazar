import { memo } from 'react';

import usePagination from '../../../../../hooks/usePagination';

import ProductFeedbackCard from '../../../card/ProductFeedbackCard/ProductFeedbackCard';
import PaginationButtons from '../../../../organisms/PaginationButtons/PaginationButtons';

import { productFeedback } from '../../../../../data/temp/productFeedback';

import styles from '../CustomerFeedback/CustomerFeedback.module.scss';



const CustomerFeedback:React.FC = () => {

    const itemsPerPage= 3;
    const totalItems = productFeedback.length;

    const {displayedData,currentPage,goToNextPage,goToPrevPage,goToPage} = usePagination(
        totalItems,
        itemsPerPage,
        productFeedback
    );

    const renderFeedback =()=>{
        return displayedData.map((item,i)=>{
            return(
                <ProductFeedbackCard    id={item.id}
                                        name={item.name}
                                        avatar={item.avatar}
                                        rating={item.rating}
                                        date={item.date}
                                        feedback={item.feedback}
                                        key={i}
                />
            )
        })
    }

    return (
        <section className={styles.CustomerFeedback}>
            <div className={styles._feedbacks}>
                {renderFeedback()}
            </div>

            <div className={styles._pagButtons}>
                <PaginationButtons
                                totalItems={totalItems}
                                itemsPerPage={itemsPerPage}
                                valueCurrentPage={currentPage}
                                onNextPage={goToNextPage}
                                onPrevPage={goToPrevPage}
                                onGoToPage={goToPage}
                />
            </div>

        </section>
    )
}

export default memo(CustomerFeedback);