import { AuthGuard } from './guards/auth.guard';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { FilipRoutingModule } from './filip-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilipComponent } from './filip.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService } from './service/login-service.service';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('acessToken')
}

@NgModule({
  declarations: [
    FilipComponent,
    LoginComponent,
    DashboardComponent
  ],
  providers: [LoginServiceService, AuthService, UserService, AuthGuard],

  imports: [
    CommonModule,
    FilipRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200'],
        disallowedRoutes: []
      }
    })
  ]
})
export class FilipModule { }
