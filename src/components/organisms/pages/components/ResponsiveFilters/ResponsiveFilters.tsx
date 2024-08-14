import MobileFilters from '../MobileFilters/MobileFilters';

import styles from './ResponsiveFilters.module.scss';

import type { ComponentType } from "react";

interface ResponsiveFiltersProps {
    FilterComponent: ComponentType;
}

const ResponsiveFilters: React.FC<ResponsiveFiltersProps> = ({ FilterComponent }) => {
    return (
        <>
          <div className={styles._desktopFilters}>
            <FilterComponent />
          </div>
          <div className={styles._mobileFilters}>
            <MobileFilters FilterComponent={FilterComponent} />
          </div>
        </>
    )
}

export default ResponsiveFilters;
