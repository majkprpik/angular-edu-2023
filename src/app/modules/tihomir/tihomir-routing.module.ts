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
        path: '',
        component: LoginComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate : [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TihomirRoutingModule {}
