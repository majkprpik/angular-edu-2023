import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TihomirRoutingModule } from './tihomir-routing.module';
import { TihomirComponent } from './tihomir.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BackgroundComponent } from './components/gridView/background.component';
import { ListViewComponent } from './components/list-view/list-view.component';


@NgModule({
  declarations: [
    TihomirComponent,
    BackgroundComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    TihomirRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers :[
    AuthService
  ]
})
export class TihomirModule { }
