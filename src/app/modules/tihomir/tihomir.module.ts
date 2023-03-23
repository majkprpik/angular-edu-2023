import { CartServiceService } from './services/cart-service.service';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductServiceService } from './services/product-service.service';
import { ProductsListViewComponent } from './components/products-list-view/products-list-view.component';

import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
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

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { TestPipe } from './pipes/test.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { IPhonesComponent } from './components/i-phones/i-phones.component';
import { CartComponent } from './components/cart/cart.component';
import { SamsungsComponent } from './components/samsungs/samsungs.component';
import { LGsComponent } from './components/lgs/lgs.component';
import { SonysComponent } from './components/sonys/sonys.component';

export function tokenGetter() {
  return localStorage.getItem('accessToken');
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
    ProductComponent,
    ProductsListViewComponent,
    TestPipe,
    SortPipe,
    IPhonesComponent,
    CartComponent,
    SamsungsComponent,
    LGsComponent,
    SonysComponent,
  ],
  imports: [
    CommonModule,
    TihomirRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200'],
        disallowedRoutes: [],
      },
    }),
    MatSlideToggleModule,
    MatButtonModule,
    MatSliderModule,
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    ProductServiceService,
    ProductResolver,
    CartServiceService,
  ],
})
export class TihomirModule {}
