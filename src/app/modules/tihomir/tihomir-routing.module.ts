import { SonysComponent } from './components/sonys/sonys.component';
import { LGsComponent } from './components/lgs/lgs.component';
import { SamsungsComponent } from './components/samsungs/samsungs.component';
import { CartComponent } from './components/cart/cart.component';
import { IPhonesComponent } from './components/i-phones/i-phones.component';
import { ProductResolver } from './resolvers/product.resolver';
import { ListViewComponent } from './components/list-view/list-view.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TihomirComponent } from './tihomir.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TihomirComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate : [AuthGuard],
        resolve:{
          products: ProductResolver
        },
        children:[
          {
            path: 'grid-view',
            component : GridViewComponent
          },
          {
            path: 'list-view',
            component: ListViewComponent
          },
          {
            path: '',
            component: GridViewComponent
          },
          {
            path: 'i-phones',
            component: IPhonesComponent,
            resolve:{
              products: ProductResolver
            },
          },
          {
            path: 'samsungs',
            component: SamsungsComponent,
            resolve:{
              products: ProductResolver
            },
          },
          {
            path: 'lgs',
            component: LGsComponent,
            resolve:{
              products: ProductResolver
            },
          },
          {
            path: 'sonys',
            component: SonysComponent,
            resolve:{
              products: ProductResolver
            },
          },
          {
            path: 'cart',
            component : CartComponent
          }
        ]
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component : LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TihomirRoutingModule {}
