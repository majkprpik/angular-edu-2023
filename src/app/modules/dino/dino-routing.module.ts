import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinoComponent } from './dino.component';

const routes: Routes = [
  {
    path:'',
    component:DinoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinoRoutingModule { }
