import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./Page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./Page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'change-pass',
    loadChildren: () => import('./Page/change-pass/change-pass.module').then( m => m.ChangePassPageModule)
  },
  {
    path: 'oublier',
    loadChildren: () => import('./Page/oublier/oublier.module').then( m => m.OublierPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Page/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
