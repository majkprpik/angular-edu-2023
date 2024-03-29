import { DashboardComponent } from './modules/karla/components/dashboard/dashboard.component';
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
    path: 'martin',
    loadChildren: () =>
      import('./modules/martin/martin.module').then((m) => m.MartinModule),
  },
  {
    path: 'tihomir',
    loadChildren: () =>
      import('./modules/tihomir/tihomir.module').then((m) => m.TihomirModule),
  },
  {
    path: 'my-module15',
    loadChildren: () =>
      import('./modules/my-module15/my-module15.module').then(
        (m) => m.MyModule15Module
      ),
  },
  {
    path: 'Dino',
    loadChildren: () =>
      import('./modules/dino/dino.module').then((m) => m.DinoModule),
  },
  {
    path: 'filip',
    loadChildren: () =>
      import('./modules/filip/filip.module').then((m) => m.FilipModule),
  },
  {
    path: 'mislav-cacic',
    loadChildren: () =>
      import('./modules/mislav-cacic/mislav-cacic.module').then(
        (m) => m.MislavCacicModule
      ),
  },
  {
    path: 'karla',
    loadChildren: () =>
      import('./modules/karla/karla.module').then((m) => m.KarlaModule),
  },
  {
    path: 'ivan',
    loadChildren: () =>
      import('./modules/ivan/ivan.module').then((m) => m.IvanModule),
  },
  {
    path: 'Ljulj',
    loadChildren: () =>
      import('./modules/ljulj/ljulj.module').then((m) => m.LjuljModule),
  },
  {
    path: 'stjepan',
    loadChildren: () =>
      import('./modules/stjepan/stjepan.module').then((m) => m.StjepanModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
