import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MislavCacicRoutingModule } from './mislav-cacic-routing.module';
import { MislavCacicComponent } from './mislav-cacic.component';

@NgModule({
  declarations: [MislavCacicComponent],
  imports: [CommonModule, MislavCacicRoutingModule, FormsModule],
})
export class MislavCacicModule {}
