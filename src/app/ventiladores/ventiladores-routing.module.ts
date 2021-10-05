import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentiladoresPage } from './ventiladores.page';

const routes: Routes = [
  {
    path: '',
    component: VentiladoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentiladoresPageRoutingModule {}
