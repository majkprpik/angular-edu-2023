import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./modules/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'my-module15',
    loadChildren: () =>
      import('./modules/my-module15/my-module15.module').then(
        (m) => m.MyModule15Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
