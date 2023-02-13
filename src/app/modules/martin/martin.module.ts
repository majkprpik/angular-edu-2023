import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartinRoutingModule } from './martin-routing.module';
import { MartinComponent } from './martin.component';


@NgModule({
  declarations: [
    MartinComponent
  ],
  imports: [
    CommonModule,
    MartinRoutingModule
  ]
})
export class MartinModule { }
