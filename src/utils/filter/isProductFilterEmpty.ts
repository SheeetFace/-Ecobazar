import type { InitProductFilter } from "../../types/productFilterType"

export const isProductFilterEmpty=(filter:InitProductFilter):boolean=>{

    const isFilterEmpty =   filter.search === '' &&
                            filter.categoryValue.length === 0 &&
                            filter.price.min==='' &&
                            filter.price.max==='' &&
                            filter.rating.length === 0 &&
                            filter.tag=== '' &&
                            filter.date=== 'newest'

    return isFilterEmpty;
}