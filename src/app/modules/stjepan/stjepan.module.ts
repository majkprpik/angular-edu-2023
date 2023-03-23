import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StjepanRoutingModule } from './stjepan-routing.module';
import { StjepanComponent } from './stjepan.component';

@NgModule({
  declarations: [StjepanComponent],
  imports: [CommonModule, StjepanRoutingModule],
})
export class StjepanModule {}
