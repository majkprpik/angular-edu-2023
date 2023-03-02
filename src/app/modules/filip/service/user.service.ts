import { Injectable } from '@angular/core';

@Injectable(
  
)
export class UserService {

  constructor() 
  {this.user= {username:""} }

  user:{
    username:string
  }
  
}
