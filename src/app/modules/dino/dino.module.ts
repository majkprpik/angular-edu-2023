import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinoRoutingModule } from './dino-routing.module';
import { DinoComponent } from './dino.component';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GridhomeComponent } from './components/gridhome/gridhome.component';
import { ListhomeComponent } from './components/listhome/listhome.component';
@NgModule({
  declarations: [
    DinoComponent,
    LoginComponent,
    GridhomeComponent,
    ListhomeComponent,
  ],
  imports: [
    CommonModule,
    DinoRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers:[
    AuthService
  ]
})
export class DinoModule { 
}
