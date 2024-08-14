import Button from '../../../../../../atoms/Button/Button';

import styles from '../MobileFilterModal/MobileFilterModal.module.scss';

import type { ComponentType,RefObject } from 'react';

interface MobileFilterModalProps {
    FilterComponent: ComponentType
    closeFn: () => void
    forwardRef: RefObject<HTMLDivElement>|null
}


const MobileFilterModal:React.FC<MobileFilterModalProps> = ({FilterComponent, closeFn, forwardRef}) => {
    return (
        <div className={styles.MobileFilterModal}>
                <div className={styles._closeButton}>
                    <Button className="ButtonFilledOval fillGreen colorTextGrey1 buttonMaxHeight" 
                            type='button'
                            text='✖'
                            onClick={closeFn}
                    />
                </div>
                <div className={`${styles._filters} animationAppear`} ref={forwardRef}>
                    <FilterComponent />
                </div>
        </div>
    )
}

export default MobileFilterModal;