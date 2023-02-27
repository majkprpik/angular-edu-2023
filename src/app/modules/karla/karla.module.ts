import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KarlaRoutingModule } from './karla-routing.module';
import { KarlaComponent } from './karla.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { GridComponent } from './components/grid/grid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { StorageService } from './services/storage.service';

export function tokenGetter(){
  return localStorage.getItem('accessToken');
}

@NgModule({
  declarations: [
    KarlaComponent,
    LoginComponent,
    GridComponent,
    DashboardComponent,
  ],
  providers: [AuthService, UserService, StorageService, AuthGuard],
  imports: [
    CommonModule,
    KarlaRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {   
      tokenGetter: tokenGetter,
      allowedDomains: ['localhost:4200'],
      disallowedRoutes: []
    }
    }),
  ],
})
export class KarlaModule {}
