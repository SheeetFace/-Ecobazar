type ProductsID= { ID: string; quantity: number;}

export interface SubmitOrderType {
    date:string,
    shipping:Record<string,string>[]|[],
    totalPrice:string,
    productIDs:ProductsID[],
    paymentMethod:string,
    status:string,
}