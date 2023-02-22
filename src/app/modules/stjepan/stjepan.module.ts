import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StjepanRoutingModule } from './stjepan-routing.module';
import { StjepanComponent } from './stjepan.component';
import { AutenService } from '../services/auten-service.service';


@NgModule({
  declarations: [
    StjepanComponent
  ],
  imports: [
    CommonModule,
    StjepanRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AutenService
  ]
})
export class StjepanModule { }
