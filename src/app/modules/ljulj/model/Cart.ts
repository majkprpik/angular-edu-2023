import { Cartitem } from "./Cartitem";
export interface Cart {
    products: any;
    Cartitems:Cartitem[],
    totalPrice:number,
}