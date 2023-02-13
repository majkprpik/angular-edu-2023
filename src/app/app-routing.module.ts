import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./modules/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'tihomir',
    loadChildren: () =>
      import('./modules/tihomir/tihomir.module').then((m) => m.TihomirModule),
  },
  {
    path: 'filip',
    loadChildren: () =>
      import('./modules/filip/filip.module').then((m) => m.FilipModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
