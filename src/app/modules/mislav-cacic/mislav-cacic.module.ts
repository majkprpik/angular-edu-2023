import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { HeaderComponent } from './components/header/header.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { AuthGuard } from './guards/auth.guard';
import { MislavCacicRoutingModule } from './mislav-cacic-routing.module';
import { MislavCacicComponent } from './mislav-cacic.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';
import { SortPipe } from './pipes/sort.pipe';
import { TestPipe } from './pipes/test.pipe';

export function tokenGetter() {
  return localStorage.getItem('accessToken');
}

@NgModule({
  declarations: [
    MislavCacicComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent,
    ListViewComponent,
    GridViewComponent,
    CatalogComponent,
    ContactComponent,
    SortPipe,
    TestPipe,
  ],
  imports: [
    RouterModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MislavCacicRoutingModule,
    FormsModule,
    HttpClientModule,
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
    LocalStorageService,
    UserService,
    AuthGuard,
    ApiService,
  ],
})
export class MislavCacicModule {}
