import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductServiceService {
  phones: Product[] = [
    {
      id: "",
      name: 'iPhone',
      imageURL: 'assets/tihomir/iphone14pro.jpg',
      logo: 'assets/tihomir/appleLogo.png',
      CPU : "",
      RAM : "",
      description: 'iPhone 14 Pro',
      price: 800,
    },
    {
      id: "",
      name: 'Samsung',
      imageURL: 'assets/tihomir/GalaxyS22.jpg',
      logo: 'assets/tihomir/samsungLogo.png',
      CPU : "",
      RAM : "",
      description: 'Samsung Galaxy S22',
      price: 900,
    },
    {
      id: "",
      name: 'Huawei',
      imageURL: 'assets/tihomir/Honor70.jpg',
      logo: 'assets/tihomir/huaweiLogo.png',
      CPU : "",
      RAM : "",
      description: 'Honor 70',
      price: 1200,
    },
    {
      id: "",
      name: 'Xiaomi',
      imageURL: 'assets/tihomir/Xiaomi12S.jpg',
      logo: 'assets/tihomir/xiaomiLogo.png',
      description: 'Xiaomi 12S',
      CPU : "",
      RAM : "",
      price: 700,
    },
  ];

  // products : Product[] = [];
  products : any[] = [];

  $phones = new BehaviorSubject<Product[]>(this.phones);

  productsURL = "https://parseapi.back4app.com/classes/Dataset_Cell_Phones_Model_Brand?order=Brand&where=%7B%22CPU%22%3A%7B%22%24gt%22%3A%221.2%22%7D%2C%22Announced%22%3A%7B%22%24gt%22%3A%222016%22%7D%2C%22RAM%22%3A%7B%22%24gt%22%3A%222%22%7D%2C%22NFC%22%3A%7B%22%24exists%22%3Atrue%7D%2C%22Display_resolution%22%3A%7B%22%24lt%22%3A%225%22%7D%7D";

  constructor(private httpClient: HttpClient) {
    
  }

  getProductData(){
    return this.httpClient.get(this.productsURL, {
      headers: {
        'X-Parse-Application-Id': 'MEqvn3N742oOXsF33z6BFeezRkW8zXXh4nIwOQUT', // This is the fake app's application id
        'X-Parse-Master-Key': 'uZ1r1iHnOQr5K4WggIibVczBZSPpWfYbSRpD6INw', // This is the fake app's readonly master key
      },
    }).subscribe((data : any) =>{
      this.products = data.results.map((p : any) => {
        return {
          id : p.objectId,
          name : p.Brand,
          CPU : p.CPU,
          RAM : p.RAM,
        }
      });
      console.log(this.products);
    });
  }

  getProductsDataWithoutSubscribe(){
    return this.httpClient.get(this.productsURL, {
      headers: {
        'X-Parse-Application-Id': 'MEqvn3N742oOXsF33z6BFeezRkW8zXXh4nIwOQUT', // This is the fake app's application id
        'X-Parse-Master-Key': 'uZ1r1iHnOQr5K4WggIibVczBZSPpWfYbSRpD6INw', // This is the fake app's readonly master key
      },
    });
  }

  // productsURLs = [
  //   'https://parseapi.back4app.com/classes/Dataset_Cell_Phones_Model_Brand?keys=Brand,Announced,Audio_jack,Battery,Bluetooth,CPU,Chipset,Colors,Dimensions,Display_resolution,Display_size,Display_type,Internal_memory,Network,Operating_System,Primary_camera,RAM,Secondary_camera&where=%7B%22Brand%22%3A%22Apple%22%2C%22Chipset%22%3A%22Apple%20A10%20Fusion%22%7D',
  //   'https://parseapi.back4app.com/classes/Dataset_Cell_Phones_Model_Brand?keys=Brand,Announced,Audio_jack,Battery,Bluetooth,CPU,Chipset,Colors,Dimensions,Display_resolution,Display_size,Display_type,Internal_memory,Network,Operating_System,Primary_camera,RAM,Secondary_camera&where=%7B%22Brand%22%3A%22Samsung%22%2C%22Announced%22%3A%7B%22%24gt%22%3A%222017%22%7D%2C%22RAM%22%3A%7B%22%24gt%22%3A%225%22%7D%7D',
  //   'https://parseapi.back4app.com/classes/Dataset_Cell_Phones_Model_Brand?keys=Brand,Announced,Audio_jack,Battery,Bluetooth,CPU,Chipset,Colors,Dimensions,Display_resolution,Display_size,Display_type,Internal_memory,Network,Operating_System,Primary_camera,RAM,Secondary_camera&where=%7B%22Brand%22%3A%22Huawei%22%2C%22Announced%22%3A%7B%22%24gt%22%3A%222017%22%7D%2C%22RAM%22%3A%7B%22%24gt%22%3A%224%22%7D%7D',
  //   'https://parseapi.back4app.com/classes/Dataset_Cell_Phones_Model_Brand?keys=Brand,Announced,Audio_jack,Battery,Bluetooth,CPU,Chipset,Colors,Dimensions,Display_resolution,Display_size,Display_type,Internal_memory,Network,Operating_System,Primary_camera,RAM,Secondary_camera&where=%7B%22Brand%22%3A%22Xiaomi%22%2C%22Announced%22%3A%7B%22%24gt%22%3A%222017%22%7D%2C%22RAM%22%3A%7B%22%24gt%22%3A%224%22%7D%7D'
  // ];

  // getProductData(){
  //   for(let i = 0; this.productsURLs.length; i++)
  //   {
  //     this.products[i] = this.httpClient.get(this.productsURLs[i], {
  //       headers: {
  //         'X-Parse-Application-Id': 'MEqvn3N742oOXsF33z6BFeezRkW8zXXh4nIwOQUT', // This is the fake app's application id
  //         'X-Parse-Master-Key': 'uZ1r1iHnOQr5K4WggIibVczBZSPpWfYbSRpD6INw', // This is the fake app's readonly master key
  //       },
  //     }).subscribe((data : any) =>{
  //       this.phones[i] = data.results.map((p : any) => {
  //         return {
  //           id : p.objectId,
  //           name : p.Brand,
  //           CPU : p.CPU,
  //           RAM : p.RAM,
  //         }
  //       });
  //       console.log(this.products[i]);
  //     });
  //   }
  //   return this.products;
  // }

 
}
