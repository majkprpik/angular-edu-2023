import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartinRoutingModule } from './martin-routing.module';
import { MartinComponent } from './martin.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [MartinComponent, LoginComponent],
  imports: [CommonModule, MartinRoutingModule, FormsModule],
})
export class MartinModule {}
