import { useContext } from 'react';

import { ProductFilterContext } from '../../../../../../context/ProductFilterContext';

import Button from '../../../../../atoms/Button/Button';

import styles from '../ClearFilter/ClearFilter.module.scss';

const ClearFilter:React.FC = () => {

    const { clearFilter } = useContext(ProductFilterContext);

    const handleClearFilter =()=>{
        clearFilter()
    }

    return (
        <div className={styles.ClearFilter}>
            <Button
                className="ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight buttonMaxWidth"
                text="Clear All Filters"
                type="button"
                onClick={handleClearFilter}
            />
        </div>
    )
}

export default ClearFilter;