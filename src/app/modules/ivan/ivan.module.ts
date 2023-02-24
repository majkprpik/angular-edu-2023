import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvanRoutingModule } from './ivan-routing.module';
import { IvanComponent } from '../ivan/ivan.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';

export function tokenGetter() {
  return localStorage.getItem('accessToken_ivan');
}
@NgModule({
  declarations: [IvanComponent, DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    IvanRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:5003'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [AuthService, UserService, AuthGuard],
})
export class IvanModule {}
