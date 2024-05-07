import Button from '../../../../atoms/Button/Button';

import styles from '../ClearFilter/ClearFilter.module.scss';

interface ClearFilterProps{
    clearFilterFn:()=>void
}

const ClearFilter:React.FC<ClearFilterProps> = ({clearFilterFn}) => {

    const handleClearFilter =()=>{
        clearFilterFn()
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