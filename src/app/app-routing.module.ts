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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
