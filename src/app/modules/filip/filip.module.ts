import { MatSliderModule } from '@angular/material/slider';
import { ProductsResolver } from './resolvers/products.resolver';
import { CardComponent } from './component/card/card.component';
import { ProductService } from './service/product.service';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { FilipRoutingModule } from './filip-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilipComponent } from './filip.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService } from './service/login-service.service';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ButtonModule } from 'primeng/button';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';
import { KartComponent } from './component/kart/kart.component';
import { ProductComponent } from './component/product/product.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { TestPipe } from './pipe/test.pipe';
import { PricePipe } from './pipe/price.pipe';

import { SortByPricePipe } from './pipe/sort-by-price.pipe';
import { SortingComponent } from './component/sorting/sorting.component';
import { PriceSliderComponent } from './component/price-slider/price-slider.component';
import { PriceFilterPipe } from './pipe/price-filter.pipe';


export function tokenGetter() {
  return localStorage.getItem('acessToken');
}

@NgModule({
  declarations: [
    FilipComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    KartComponent,
    ProductComponent,
    CardComponent,
    TestPipe,
    PricePipe,
    SortByPricePipe,
    SortingComponent,
    PriceSliderComponent,
    PriceFilterPipe
  
  ],
  providers: [
    LoginServiceService,
    AuthService,
    UserService,
    AuthGuard,
    ProductService,
    ProductsResolver,
  ],

  imports: [
    CommonModule,
    FilipRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    AccordionModule,
    MatToolbarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSliderModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200'],
        disallowedRoutes: [],
      },
    }),
  ],
})
export class FilipModule {}
