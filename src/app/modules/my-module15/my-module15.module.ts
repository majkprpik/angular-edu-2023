import { AuthGuard } from './guards/auth.guard';
import { UserServiceService } from './user-service.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyModule15Component } from './my-module15.component';

import { MyModule15RoutingModule } from './my-module15-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(){
  return localStorage.getItem('accesToken');
}

@NgModule({
  declarations: [MyModule15Component, LoginComponent, ProductComponent, SidebarComponent, DashboardComponent],
  imports: [CommonModule, MyModule15RoutingModule, FormsModule, HttpClientModule, FlexLayoutModule, JwtModule.forRoot({config: {
    tokenGetter: tokenGetter,
    allowedDomains: ['localhost:5003'],
    disallowedRoutes: [''],
  }})],
  providers: [AuthService, UserServiceService, AuthGuard]
})
export class MyModule15Module {

}
