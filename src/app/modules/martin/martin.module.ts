import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartinRoutingModule } from './martin-routing.module';
import { MartinComponent } from './martin.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';

export function tokenGetter() {
  return localStorage.getItem('accessToken_Martin');
}

@NgModule({
  declarations: [MartinComponent, LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    MartinRoutingModule,
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
  providers: [AuthService, UserService, AuthGuard],
})
export class MartinModule {}
