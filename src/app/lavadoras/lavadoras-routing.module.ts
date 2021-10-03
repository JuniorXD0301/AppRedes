import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavadorasPage } from './lavadoras.page';

const routes: Routes = [
  {
    path: '',
    component: LavadorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LavadorasPageRoutingModule {}
