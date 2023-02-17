import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartinRoutingModule } from './martin-routing.module';
import { MartinComponent } from './martin.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MartinComponent, LoginComponent],
  imports: [CommonModule, MartinRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService],
})
export class MartinModule {}
