import { ProductService } from './services/product.service';
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
import { ProductComponent } from './components/product/product.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { PriceSortPipe } from './pipes/price-sort.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { SortComponent } from './components/sort/sort.component';
import { SliderComponent } from './components/slider/slider.component';
import { CartComponent } from './components/cart/cart.component';

export function tokenGetter() {
  return localStorage.getItem('accessToken');
}

@NgModule({
  declarations: [
    KarlaComponent,
    LoginComponent,
    GridComponent,
    DashboardComponent,
    ProductComponent,
    NavigationComponent,
    PriceSortPipe,
    PriceFilterPipe,
    SortComponent,
    SliderComponent,
    CartComponent,
  ],
  providers: [
    AuthService,
    UserService,
    StorageService,
    AuthGuard,
    ProductService,
  ],
  imports: [
    CommonModule,
    KarlaRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200'],
        disallowedRoutes: [],
      },
    }),
  ],
})
export class KarlaModule {}
