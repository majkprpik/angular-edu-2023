import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinoRoutingModule } from './dino-routing.module';
import { DinoComponent } from './dino.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    DinoComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DinoRoutingModule,
    FormsModule
  ]
})
export class DinoModule { 
}
