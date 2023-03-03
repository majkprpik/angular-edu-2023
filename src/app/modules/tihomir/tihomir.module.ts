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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';


export function tokenGetter(){
  return localStorage.getItem('accessToken')
}

@NgModule({
  declarations: [
    TihomirComponent,
    DashboardComponent,
    LoginComponent,
    GridViewComponent,
    ListViewComponent,
    SidebarComponent,
    HeaderComponent,
    ProductComponent
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
