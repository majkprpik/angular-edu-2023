import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StjepanRoutingModule } from './stjepan-routing.module';
import { StjepanComponent } from './stjepan.component';
import { AutenService } from './services/auth.service';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guard/auth.guard';

export function tokenGetter() {
  return localStorage.getItem('accesToken_stjepan');
}

@NgModule({
  declarations: [
    StjepanComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StjepanRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5003'],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    AutenService,
    UserService,
    AuthGuard
  ]
})
export class StjepanModule { }
