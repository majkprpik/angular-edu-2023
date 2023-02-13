import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvanRoutingModule } from './ivan-routing.module';
import { IvanComponent } from '../ivan/ivan.component';


@NgModule({
  declarations: [
    IvanComponent
  ],
  imports: [
    CommonModule,
    IvanRoutingModule
  ]
})
export class IvanModule { }
