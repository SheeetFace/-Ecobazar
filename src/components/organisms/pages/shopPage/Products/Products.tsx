import { useContext, useEffect } from 'react';
import { FilterContext } from '../../../../../contexts/FilterContext';

import styles from '../Products/Products.module.scss';

const Products:React.FC = () => {

    const { filter } = useContext(FilterContext);

    useEffect(() => {
      console.log('Updated filter:', filter);
    }, [filter]);

    return (
            <section className={styles.Products}>
                <h1>123</h1>
            </section>
    )
}

export default Products;