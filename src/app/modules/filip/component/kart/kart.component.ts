import { Product } from './../../models/product';
import { cartItem } from './../../models/cart-item';
import { KartService } from './../../service/kart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss']
})
export class KartComponent {
 
constructor(private cartService: KartService){

}

showItems(cartItem: cartItem){
  
}

// constructor(private kartService:KartService, private cart:cart){}
// kosaricaProduct: Product[]=[]

//  getProducts(Product:Product) {
//   this.cart.addItem(this.kosaricaProduct)
//   }


}
