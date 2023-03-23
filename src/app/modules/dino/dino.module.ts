import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinoRoutingModule } from './dino-routing.module';
import { DinoComponent } from './dino.component';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DinoComponent, LoginComponent],
  imports: [CommonModule, DinoRoutingModule, FontAwesomeModule, FormsModule],
})
export class DinoModule {}
