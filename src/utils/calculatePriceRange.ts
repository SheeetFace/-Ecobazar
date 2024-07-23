import type { ProductDataType } from "../types/product/productDataTypes";

export const calculatePriceRange = (products:ProductDataType[]) => {

    if(products.length === 0) return { minPrice:0, maxPrice:100 }

    let minPrice = Infinity;
    let maxPrice = -Infinity;

    for(const product of products){
      const price = parseFloat(product.currentCost);

      if(!isNaN(price) && price>=0){
        minPrice = Math.min(minPrice, price);
        maxPrice = Math.max(maxPrice, price);
      }
    }

    return{
      minPrice: minPrice === Infinity ? 0 : minPrice,
      maxPrice: maxPrice === -Infinity ? 0 : maxPrice
    }

}