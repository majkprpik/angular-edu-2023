import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinoRoutingModule } from './dino-routing.module';
import { DinoComponent } from './dino.component';


@NgModule({
  declarations: [
    DinoComponent
  ],
  imports: [
    CommonModule,
    DinoRoutingModule
  ]
})
export class DinoModule { }
