import { FilipRoutingModule } from './filip-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilipComponent } from './filip.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService } from './service/login-service.service';
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
    FilipComponent,
    LoginComponent
  ],
  providers: [LoginServiceService],

  imports: [
    CommonModule,
    FilipRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FilipModule { }
