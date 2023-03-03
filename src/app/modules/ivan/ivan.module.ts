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
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { GridviewComponent } from './pages/gridview/gridview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductComponent } from './pages/product/product.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { StorageService } from './services/storage.service';
import { FlowerService } from './services/flower.service';

export function tokenGetter() {
  return localStorage.getItem('accessToken_ivan');
}
@NgModule({
  declarations: [IvanComponent, DashboardComponent, LoginComponent, HeaderComponent, ProductsComponent, GridviewComponent, SidebarComponent, ProductComponent, CartPageComponent],
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
  providers: [AuthService, UserService, AuthGuard, StorageService, FlowerService],
})
export class IvanModule {}
