import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvanComponent } from './ivan.component';

const routes: Routes = [
  {
    path: '',
    component: IvanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvanRoutingModule {}
