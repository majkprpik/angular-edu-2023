import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TihomirRoutingModule } from './tihomir-routing.module';
import { TihomirComponent } from './tihomir.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TihomirComponent
  ],
  imports: [
    CommonModule,
    TihomirRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers :[
    AuthService,
    LocalStorageService
  ]
})
export class TihomirModule { }
