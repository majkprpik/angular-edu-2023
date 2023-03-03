export class Flower {
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    rating:number = 0
    imageUrl!:string;
}