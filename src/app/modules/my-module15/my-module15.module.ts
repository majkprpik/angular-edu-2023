import { CorsInterceptor } from './interceptors/cors.interceptor';
import { FilterService } from './services/filter.service';
import { CartService } from './services/cart.service';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductService } from './services/product.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthGuard } from './guards/auth.guard';
import { UserServiceService } from './user-service.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyModule15Component } from './my-module15.component';

import { MyModule15RoutingModule } from './my-module15-routing.module';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { JwtModule } from '@auth0/angular-jwt';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestPipe } from './pipes/test.pipe';
import { SortPricePipe } from './pipes/sort-price.pipe';
import { FilterPricePipe } from './pipes/filter-price.pipe';
import { CartComponent } from './components/cart/cart.component';
import { StorageService } from './services/storage.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { JewelryPipe } from './pipes/jewelry.pipe';
import { CategoryPipe } from './pipes/category.pipe';

export function tokenGetter() {
  return localStorage.getItem('accesToken');
}

@NgModule({
  declarations: [
    MyModule15Component,
    LoginComponent,
    ProductComponent,
    SidebarComponent,
    DashboardComponent,
    TestPipe,
    SortPricePipe,
    FilterPricePipe,
    CartComponent,
    SearchBarComponent,
    JewelryPipe,
    CategoryPipe,
  ],
  imports: [
    CommonModule,
    MyModule15RoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5003'],
        disallowedRoutes: [''],
      },
    }),
  ],
  providers: [
    CartService,
    AuthService,
    StorageService,
    UserServiceService,
    AuthGuard,
    ProductService,
    HttpClient,
    ProductsResolver,
    FilterService,
    { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true },
  ],
})
export class MyModule15Module {}
