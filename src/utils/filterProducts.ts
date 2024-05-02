import { ProductDataType as ShopProduct } from "../types/productDataTypes"

type TDate = 'newest'|'oldest'

interface InitFilter{
    categoryValue:string[]
    price:{
        min:string
        max:string
    },
    rating:number[]
    tag:string
    date:TDate
}

// interface ShopProduct{
//     name:string
//     id:string
//     src:string
//     currentCost:string
//     oldCost:string
//     sale:string
//     rating:string
//     promotedCategories:string[],
//     weight:string
//     color:string
//     type:string
//     category:string
//     stockStatus:string
//     date:string
//     tag:string[]
//     description:string
// }

export const filterProducts = (products: ShopProduct[], filter: InitFilter): ShopProduct[] => {

    const sortedProducts = [...products].sort((a, b)=>{
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
  
      if(filter.date ==='newest') return dateB.getTime() - dateA.getTime();
      return dateA.getTime() - dateB.getTime(); 
    });
  
    const filteredProducts = sortedProducts.filter((product)=>{

      if(filter.categoryValue.length > 0 && !filter.categoryValue.includes(product.category.toLowerCase())){
        return false;
      }
  
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
  
      // if(filter.tag && product.tag !== filter.tag){
        if(filter.tag && product.tag && !product.tag.includes(filter.tag)){
        return false;
      }
  
      return true; 
    });
  
    return filteredProducts;
};