import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvanRoutingModule } from './ivan-routing.module';
import { IvanComponent } from '../ivan/ivan.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IvanComponent],
  imports: [CommonModule, IvanRoutingModule, FormsModule],
})
export class IvanModule {}
