import { Product } from './Product';

export interface Cart {
    products : Product[],
    price : number
}