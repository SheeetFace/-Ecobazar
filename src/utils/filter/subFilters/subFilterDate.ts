type TDate = 'newest'|'oldest';

import type { ProductDataType } from "../../../types/product/productDataTypes";
import type { BlogDataTypes } from "../../../types/blog/blogDataTypes";

type Data = ProductDataType[]|BlogDataTypes[]

export const subFilterDate =(data:Data,filterDate:TDate)=>{

    const sortedDate = [...data].sort((a, b)=>{
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
    
        if(filterDate ==='newest') return dateB.getTime() - dateA.getTime();
        return dateA.getTime() - dateB.getTime(); 
    });

    return sortedDate

}