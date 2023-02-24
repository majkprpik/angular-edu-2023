import { KarlaModule } from './modules/karla/karla.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./modules/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'karla',
    loadChildren: () =>
      import('./modules/karla/karla.module').then((m) => m.KarlaModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
