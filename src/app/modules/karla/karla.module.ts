import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KarlaRoutingModule } from './karla-routing.module';
import { KarlaComponent } from './karla.component';

@NgModule({
  declarations: [KarlaComponent],
  imports: [CommonModule, KarlaRoutingModule],
})
export class KarlaModule {}
