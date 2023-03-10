import { Product } from './Product';

export interface Cart{
    products:Product[],
    totalPrice:number,
}