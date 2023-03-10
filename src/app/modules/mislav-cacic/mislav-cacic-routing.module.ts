import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MislavCacicComponent } from './mislav-cacic.component';

const routes: Routes = [
  {
    path: '',
    component: MislavCacicComponent,
    children: [
      // {
      //   path: '',
      //   component: LoginComponent,
      // },

      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },

      {
        path: '**',
        component: LoginComponent,
      },

      // {
      //   path: 'about',
      //   component: AboutComponent,
      //   canActivate: [AuthGuard],
      // },

      {
        path: 'catalog',
        component: CatalogComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MislavCacicRoutingModule {}
