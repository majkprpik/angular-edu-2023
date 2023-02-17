import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginFormRoutingModule } from '../login-form/login-form-routing.module';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, LoginFormRoutingModule, FormsModule],
})
export class MislavCacicModule {}
