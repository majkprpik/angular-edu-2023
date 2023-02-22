import { GridhomeComponent } from './components/gridhome/gridhome.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinoComponent } from './dino.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinoRoutingModule { }
