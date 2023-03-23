import { ProductResolver } from './resolvers/product.resolver';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GridhomeComponent } from './components/gridhome/gridhome.component';
import { LoginComponent } from './components/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinoComponent } from './dino.component';
import { ListhomeComponent } from './components/listhome/listhome.component';

const routes: Routes = [
  {
    path: '',
    component: DinoComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'Dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        resolve: {
          product: ProductResolver,
        },
      },
      {
        path: '**',
        component: LoginComponent,
      },
      // {
      //   path:'Cart',
      //   component:CartComponent,
      //   canActivate:[AuthGuard],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinoRoutingModule {}
