import { LoginComponent } from './../ljulj/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LjuljRoutingModule } from './ljulj-routing.module';

import {HttpClientModule}from '@angular/common/http';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LjuljRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService]
})
export class LjuljModule {}
