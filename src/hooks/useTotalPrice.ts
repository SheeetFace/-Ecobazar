import { useMemo } from "react";

import { useProductsByIds } from "./products/useProductsByIds";
import { useAppSelector } from "../store/store";

import { selectCartItemIDs,selectItems } from "../store/slices/cartSlice";

const useTotalPrice = () => {

    const productIDs = useAppSelector(selectCartItemIDs);

    const quantities = useAppSelector(selectItems);

    const { filteredProducts } = useProductsByIds(productIDs);
    
    const totalCost = useMemo(()=>{
        return filteredProducts.reduce((total, product)=>{
            const quantity = quantities.get(product.id) ||0;
            return total + (+(product.currentCost)*quantity);
        }, 0);
    }, [filteredProducts, quantities]);

    return totalCost.toFixed(2);
}

export default useTotalPrice;