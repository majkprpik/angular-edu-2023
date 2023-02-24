import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('accessTokenDino');
}

@NgModule({
  declarations: [
    DinoComponent,
    LoginComponent,
    GridhomeComponent,
    ListhomeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DinoRoutingModule,
    FontAwesomeModule,
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
  providers: [AuthService, UserService,AuthGuard],
})
export class DinoModule {}
