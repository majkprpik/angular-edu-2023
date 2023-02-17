import { FilipRoutingModule } from './filip-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilipComponent } from './filip.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilipComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FilipRoutingModule,
    FormsModule
  ]
})
export class FilipModule { }
