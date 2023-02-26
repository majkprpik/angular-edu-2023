import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TihomirRoutingModule } from './tihomir-routing.module';
import { TihomirComponent } from './tihomir.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
=======
import { BackgroundComponent } from './components/gridView/background.component';
import { ListViewComponent } from './components/list-view/list-view.component';
>>>>>>> f12cd8cb5f59efe3a8b0acb73fa14a99b13c8561


export function tokenGetter(){
  return localStorage.getItem('accessToken')
}

@NgModule({
  declarations: [
    TihomirComponent,
<<<<<<< HEAD
    DashboardComponent,
    LoginComponent
=======
    BackgroundComponent,
    ListViewComponent
>>>>>>> f12cd8cb5f59efe3a8b0acb73fa14a99b13c8561
  ],
  imports: [
    CommonModule,
    TihomirRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter : tokenGetter,
        allowedDomains : ['localhost:4200'],
        disallowedRoutes : [],
      },
    }),
  ],
  providers :[
    AuthService,
    LocalStorageService,
    UserService,
    AuthGuard
  ]
})
export class TihomirModule { }
