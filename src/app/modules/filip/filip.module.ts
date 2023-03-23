import { FilipRoutingModule } from './filip-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilipComponent } from './filip.component';

@NgModule({
  declarations: [FilipComponent],
  imports: [CommonModule, FilipRoutingModule],
})
export class FilipModule {}
