import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyModule15Component } from './my-module15.component';

import { MyModule15RoutingModule } from './my-module15-routing.module';

@NgModule({
  declarations: [MyModule15Component, LoginComponent],
  imports: [CommonModule, MyModule15RoutingModule, FormsModule],
})
export class MyModule15Module {}
