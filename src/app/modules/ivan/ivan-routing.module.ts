import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { IvanComponent } from './ivan.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { GridviewComponent } from './pages/gridview/gridview.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: IvanComponent,

    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard],
      },
      {
        path:'product/:id',
        component:ProductComponent
      },
      {
        path:'tag/:tag',
        component:ProductsComponent
      },
      {
        path:'cartPage',
        component:CartPageComponent
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
export class IvanRoutingModule {}
