import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartinRoutingModule } from './martin-routing.module';
import { MartinComponent } from './martin.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './components/list/list.component';
import { ProductComponent } from './components/product/product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductgComponent } from './components/productg/productg.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductResolver } from './resolvers/product.resolver';
import { TestPipe } from './pipes/test.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { MatSliderModule } from '@angular/material/slider';
import { CartComponent } from './components/cart/cart.component';

export function tokenGetter() {
  return localStorage.getItem('accessToken_Martin');
}

@NgModule({
  declarations: [
    MartinComponent,
    LoginComponent,
    DashboardComponent,
    GridComponent,
    ListComponent,
    ProductComponent,
    SidebarComponent,
    ProductgComponent,
    TestPipe,
    SortPipe,
    CartComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MartinRoutingModule,
    FormsModule,
    HttpClientModule,
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
    AuthService,
    UserService,
    AuthGuard,
    ProductService,
    ProductResolver,
  ],
})
export class MartinModule {}
