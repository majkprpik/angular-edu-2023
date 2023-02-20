import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinoRoutingModule } from './dino-routing.module';
import { DinoComponent } from './dino.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    DinoComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DinoRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class DinoModule { 
}
