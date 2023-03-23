import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MartinComponent } from './martin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './components/list/list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductResolver } from './resolvers/product.resolver';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: MartinComponent,
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
          products: ProductResolver,
        },
        children: [
          {
            path: '',
            component: ListComponent,
          },
          {
            path: 'grid',
            component: GridComponent,
          },
          {
            path: 'list',
            component: ListComponent,
          },
          {
            path: 'cart',
            component: CartComponent,
          },
        ],
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
export class MartinRoutingModule {}
