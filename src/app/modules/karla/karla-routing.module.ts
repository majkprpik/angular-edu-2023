import { CartComponent } from './components/cart/cart.component';
import { KarlaComponent } from './karla.component';
import { GridComponent } from './components/grid/grid.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: KarlaComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard],
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
export class KarlaRoutingModule {}
