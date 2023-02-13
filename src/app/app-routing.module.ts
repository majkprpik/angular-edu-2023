import { TihomirComponent } from './modules/tihomir/tihomir.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./modules/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'stjepan',
    loadChildren:() =>
    import('./modules/stjepan/stjepan.module').then((m) => m.StjepanModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
