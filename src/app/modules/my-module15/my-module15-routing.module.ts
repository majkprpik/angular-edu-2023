import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyModule15Component } from './my-module15.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [AuthGuard],
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModule15RoutingModule { }
