import { ProductsResolver } from './resolvers/products.resolver';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { FilipComponent } from './filip.component';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  CanActivate,
  ActivatedRoute,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FilipComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        resolve: {
          product:ProductsResolver,
          product1:ProductsResolver,
          product2:ProductsResolver,
          product3:ProductsResolver
        }
      },
      {
        path:'',
        component:LoginComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilipRoutingModule {}
