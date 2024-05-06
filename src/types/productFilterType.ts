
export type TDate = 'newest'|'oldest';

export interface InitProductFilter{
    categoryValue:string[]
    price:{
        min:string
        max:string
    },
    rating:number[]
    tag:string
    date:TDate
    productsLength:number
}

type TKey=  keyof InitProductFilter;
export type TChangeProductFilterFn = <K extends TKey>(key: K, newFilter: InitProductFilter[K]) => void;