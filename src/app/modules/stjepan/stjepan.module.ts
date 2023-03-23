import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StjepanRoutingModule } from './stjepan-routing.module';
import { StjepanComponent } from './stjepan.component';

@NgModule({
  declarations: [
    StjepanComponent
  ],
  imports: [
    CommonModule,
    StjepanRoutingModule,
    FormsModule
  ]
})
export class StjepanModule {}
