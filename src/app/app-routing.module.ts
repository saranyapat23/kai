import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'praped1',
    loadChildren: () => import('./praped1/praped1.module').then( m => m.Praped1PageModule)
  },
  {
    path: 'sinka',
    loadChildren: () => import('./sinka/sinka.module').then( m => m.SinkaPageModule)
  },
  {
    path: 'sinka2',
    loadChildren: () => import('./sinka2/sinka2.module').then( m => m.Sinka2PageModule)
  },
  {
    path: 'sinka3',
    loadChildren: () => import('./sinka3/sinka3.module').then( m => m.Sinka3PageModule)
  },
  {
    path: 'takra',
    loadChildren: () => import('./takra/takra.module').then( m => m.TakraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
