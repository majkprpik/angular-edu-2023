<<<<<<< HEAD

=======
import { KarlaModule } from './modules/karla/karla.module';
import { TestModule } from './modules/test/test.module';
>>>>>>> ede9735 (added karla routing)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./modules/test/test.module').then((m) => m.TestModule),
      //import('src/app/modules/dino/dino.module').then((n)=>n.DinoModule)
  },
  {
    path:'Dino',
    loadChildren:()=>
    import('./modules/dino/dino.module').then((m)=>m.DinoModule)
  },
  {
    path: 'tihomir',
    loadChildren: () =>
      import('./modules/tihomir/tihomir.module').then((m) => m.TihomirModule),
  },
  {
    path: 'mislav-cacic',
    loadChildren: () =>
      import('./modules/mislav-cacic/mislav-cacic.module').then(
        (m) => m.MislavCacicModule
      ),
  },
  {
    path: 'mislav-cacic',
    loadChildren: () =>
      import('./modules/mislav-cacic/mislav-cacic.module').then(
        (m) => m.MislavCacicModule
      ),
  },
  {
    path: 'filip',
    loadChildren: () =>
      import('./modules/filip/filip.module').then((m) => m.FilipModule),
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
