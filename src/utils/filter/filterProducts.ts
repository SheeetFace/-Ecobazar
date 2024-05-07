import { ProductDataType as ShopProduct } from "../../types/productDataTypes"

import { subFilterCategoryValue } from "./subFilters/subFilterCategoryValue";
import { subFilterTag } from "./subFilters/subFilterTag";
import { subFilterDate } from "./subFilters/subFilterDate";

import type { InitProductFilter } from "../../types/productFilterType";

export const filterProducts = (products: ShopProduct[], filter: InitProductFilter): ShopProduct[] => {

    const sortedProducts = subFilterDate(products, filter.date) as ShopProduct[]
  
    const filteredProducts = sortedProducts.filter((product)=>{

      if(!subFilterCategoryValue(filter.categoryValue,product.category)) return false;
  
      if(
        (filter.price.min && +product.currentCost < +filter.price.min) 
        ||
        (filter.price.max && +product.currentCost > +filter.price.max)
      ){
        return false;
      }
  
      if(filter.rating.length > 0 && !filter.rating.includes(+product.rating)){
        return false;
      }
  
      if(!subFilterTag(filter.tag,product.tag)) return false;
      
      return true; 
    });
    
    return filteredProducts;
};