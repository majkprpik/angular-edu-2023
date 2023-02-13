import { TihomirComponent } from './tihomir.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TihomirRoutingModule } from './tihomir-routing.module';


@NgModule({
  declarations: [
    TihomirComponent
  ],
  imports: [
    CommonModule,
    TihomirRoutingModule
  ]
})
export class TihomirModule { }
