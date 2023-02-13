import { TihomirComponent } from './modules/tihomir/tihomir.component';
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
<<<<<<< HEAD
    path:'Dino',
    loadChildren:()=>
    import('./modules/dino/dino.module').then((m)=>m.DinoModule)
=======
    path: 'tihomir',
    loadChildren: () =>
      import('./modules/tihomir/tihomir.module').then((m) => m.TihomirModule),
>>>>>>> 56acd51c960216aad6dd2dac119564703be7a021
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
