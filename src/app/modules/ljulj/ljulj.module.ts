import { UserService } from './services/user.service';
import { LoginComponent } from './../ljulj/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LjuljRoutingModule } from './ljulj-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LjuljComponent } from './ljulj/ljulj.component';
export function tokenGetter() {
  return localStorage.getItem('accessToken_ljulj');
}

@NgModule({
  declarations: [LoginComponent, DashboardComponent, LjuljComponent],
  imports: [
    CommonModule,
    LjuljRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [AuthService, UserService],
})
export class LjuljModule {}
