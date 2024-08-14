import { useState, useRef } from 'react';

import useCloseModal from '../../../../../hooks/useCloseModal';

import ButtonToggleFilter from '../../../../molecules/button/ButtonToggleFilter/ButtonToggleFilter';
import MobileFilterModal from './components/MobileFilterModal/MobileFilterModal';

import styles from '../MobileFilters/MobileFilters.module.scss';


import type { ComponentType } from 'react';

interface MobileFiltersProps {
    FilterComponent: ComponentType;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ FilterComponent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useCloseModal({closeFn:()=>setIsOpen(false), modalCloseRef:ref});

    return (
            <section className={styles.MobileFilters}>  

                <div className={styles._button}>
                    <ButtonToggleFilter type='rounded' toggle={()=>setIsOpen(true)}/>
                </div>

                {isOpen && (<MobileFilterModal  FilterComponent={FilterComponent}
                                                closeFn={()=>setIsOpen(false)} 
                                                forwardRef={ref}                               
                            />)}
            </section>
        )
}
export default MobileFilters;