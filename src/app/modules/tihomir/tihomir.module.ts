import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TihomirRoutingModule } from './tihomir-routing.module';
import { TihomirComponent } from './tihomir.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TihomirComponent
  ],
  imports: [
    CommonModule,
    TihomirRoutingModule,
    FormsModule
  ]
})
export class TihomirModule { }
