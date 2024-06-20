export type TDate = 'newest' | 'oldest';

type Key<T> = keyof T;
type Value<T> = T[keyof T];

export interface InitProductFilter {
    search: string;
    categoryValue: string[];
    price: {
        min: string;
        max: string;
    };
    rating: number[];
    tag: string;
    date: TDate;
    productsLength: number;
}

export type TKey = keyof InitProductFilter;
export type TChangeProductFilterFn = <K extends TKey>(key: K, newFilter: InitProductFilter[K]) => void; //! &&&
export type ProductFilterAction = { key: Key<InitProductFilter>; value: Value<InitProductFilter> };


