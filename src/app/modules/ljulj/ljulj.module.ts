import { ProductResolver } from './resolvers/product.resolver';
import { DizajnComponent } from './components/dizajn/dizajn.component';
import { ProductService } from './services/product.service';
import { MartinComponent } from './../martin/martin.component';
import { Product } from './model/product';
import { CartService } from './service/cart.service';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { LoginComponent } from './../ljulj/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LjuljRoutingModule } from './ljulj-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LjuljComponent } from './ljulj/ljulj.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TestPipe } from './pipes/test.pipe';
import { MaximumPipe } from './pipes/maximum.pipe';
import { MinimumPipe } from './pipes/minimum.pipe';
import { NavigationComponent } from './component/navigation/navigation.component';
// import { CartProductsComponent } from './component/cart-products/cart-products.component';
import { CartComponent } from './component/cart/cart.component';
import { MatSliderModule } from '@angular/material/slider';

export function tokenGetter() {
  return localStorage.getItem('accessToken_ljulj');
}
//  @@ -36,6 +40,8 @@ export function tokenGetter() {
//     NavigationComponent,
//     ProductComponent,
//     TestPipe,
//     MinimumPipe,
//     MaximumPipe,
//   ],
//   imports: [
//     CommonModule,
//  @@ -44,7 +50,7 @@ export function tokenGetter() {
//     FormsModule,
//     MatSlideToggleModule,
//     MatChipsModule,

//     MatSliderModule,
//     HttpClientModule,
//     JwtModule.forRoot({
//       config: {
//         tokenGetter: tokenGetter,
//         allowedDomains: ['localhost:4200'],
//         disallowedRoutes: [],
//       },
//     }),
//   ],
//   providers: [AuthService, UserService,AuthGuard,ProductService,CartService,ProductResolver],
// })
// export class LjuljModule {}

// }

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LjuljComponent,
    ProductComponent,
    ProductsComponent,
    DizajnComponent,
    TestPipe,
    ProductsComponent,
    CartComponent,
    MinimumPipe,
    MaximumPipe,
  ],
  imports: [
    CommonModule,
    LjuljRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSliderModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    CartService,
    ProductService,
    ProductResolver,
  ],
})
export class LjuljModule {}
