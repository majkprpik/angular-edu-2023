import { AuthGuard } from './guards/auth.guard';
import { LjuljComponent } from './ljulj/ljulj.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DizajnComponent } from './components/dizajn/dizajn.component';
import { LoginComponent } from './../ljulj/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',component:LjuljComponent, children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'Dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
        
      
      },

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LjuljRoutingModule {}
