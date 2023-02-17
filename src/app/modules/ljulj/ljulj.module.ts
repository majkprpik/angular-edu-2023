import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LjuljRoutingModule } from './ljulj-routing.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LjuljRoutingModule, FormsModule
  ]
})
export class LjuljModule { } 
