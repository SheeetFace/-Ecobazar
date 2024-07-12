export type ProductsID= { ID: string; quantity: number;}

export interface SubmitOrderType {
    date:number,
    shipping:Record<string,string>[]|[],
    totalPrice:string,
    productIDs:ProductsID[],
    paymentMethod:string,
    status:string,
}