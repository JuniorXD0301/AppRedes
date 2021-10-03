import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'mainscreen',
    loadChildren: () => import('./mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'stoves',
    loadChildren: () => import('./stoves/stoves.module').then( m => m.StovesPageModule)
  },
  {
    path: 'lavadoras',
    loadChildren: () => import('./lavadoras/lavadoras.module').then( m => m.LavadorasPageModule)
  },
  {
    path: 'neveras',
    loadChildren: () => import('./neveras/neveras.module').then( m => m.NeverasPageModule)
  },
  {
    path: 'televisores',
    loadChildren: () => import('./televisores/televisores.module').then( m => m.TelevisoresPageModule)
  },
  {
    path: 'celulares',
    loadChildren: () => import('./celulares/celulares.module').then( m => m.CelularesPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
