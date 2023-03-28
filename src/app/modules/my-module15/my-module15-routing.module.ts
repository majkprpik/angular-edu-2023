import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyModule15Component } from './my-module15.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsResolver } from './resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: MyModule15Component,
    children: [
      {
        path: '',
        component: LoginComponent,
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        resolve: {
          product: ProductsResolver,
        },
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: '**',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModule15RoutingModule {}
