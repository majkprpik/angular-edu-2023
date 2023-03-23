import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MislavCacicComponent } from './mislav-cacic.component';

const routes: Routes = [
  {
    path: '',
    component: MislavCacicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MislavCacicRoutingModule {}
