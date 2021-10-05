import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'promociones',
    loadChildren: () => import('./promociones/promociones.module').then( m => m.PromocionesPageModule)
  },
  {
    path: 'celulares',
    loadChildren: () => import('./celulares/celulares.module').then( m => m.CelularesPageModule)
  },
  {
    path: 'estufas',
    loadChildren: () => import('./estufas/estufas.module').then( m => m.EstufasPageModule)
  },
  {
    path: 'freidora',
    loadChildren: () => import('./freidora/freidora.module').then( m => m.FreidoraPageModule)
  },
  {
    path: 'neveras',
    loadChildren: () => import('./neveras/neveras.module').then( m => m.NeverasPageModule)
  },
  {
    path: 'hornos',
    loadChildren: () => import('./hornos/hornos.module').then( m => m.HornosPageModule)
  },
  {
    path: 'ventiladores',
    loadChildren: () => import('./ventiladores/ventiladores.module').then( m => m.VentiladoresPageModule)
  },
  {
    path: 'televisores',
    loadChildren: () => import('./televisores/televisores.module').then( m => m.TelevisoresPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'olvido',
    loadChildren: () => import('./olvido/olvido.module').then( m => m.OlvidoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'lavadoras',
    loadChildren: () => import('./lavadoras/lavadoras.module').then( m => m.LavadorasPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
