import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyModule15Component } from './my-module15.component';

const routes: Routes = [
  {
    path: '',
    component: MyModule15Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModule15RoutingModule {}
