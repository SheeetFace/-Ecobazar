import useSlider from '../../../../../hooks/useSlider';

import ProductsCard from '../../../../molecules/card/ProductCard/ProductCard';

import { shopProductData } from '../../../../../data/temp/shopProductData';

import styles from '../RelatedProducts/RelatedProducts.module.scss';

const RelatedProducts:React.FC = () => {

    const relatedData = shopProductData.slice(0, 6);

    const useSlicer = useSlider({ cards: renderRelatedProducts(),
                                 styles: styles._settingSlider,
                                 slidesToShow: 5,
                                 dots:true
    });

    function renderRelatedProducts(){
        return relatedData.map((item,i)=>{
            return(
                <ProductsCard
                key={i}
                name={item.name}
                src={item.src}
                id={item.id}
                currentCost={item.currentCost}
                oldCost={item.oldCost}
                sale={item.sale}
                rating={item.rating}
    
                promotedCategories={item.promotedCategories}
                weight={item.weight}
                color={item.color}
                type={item.type}
                category={item.category}
                stockStatus={item.stockStatus}
                date={item.date}
                tag={item.tag}
                description={item.description}
                />
            )
        })
    }

    return (
        <section className={styles.RelatedProducts}>
            <h2>Related Products</h2>

            {useSlicer}
        </section>
    )
}

export default RelatedProducts;