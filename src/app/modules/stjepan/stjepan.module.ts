import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StjepanRoutingModule } from './stjepan-routing.module';
import { StjepanComponent } from './stjepan.component';
import { AutenService } from './services/auth.service';
import { LoginComponent } from './login/login/login.component';
import { UserService } from './services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsService } from './services/product.service';
import { CartService } from './services/cart.service';
import { SortPricePipe } from './pipes/sort-price.pipe';

export function tokenGetter() {
  return localStorage.getItem('accesToken_stjepan');
}

@NgModule({
  declarations: [
    StjepanComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ProductComponent,
    CartComponent,
    SortPricePipe,
    
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
    }),
  ],
  providers: [
    AutenService,
    UserService,
    AuthGuard,
    ProductsService,
    CartService,
  ]
})
export class StjepanModule { }
