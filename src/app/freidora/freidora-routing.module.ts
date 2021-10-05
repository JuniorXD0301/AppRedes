import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreidoraPage } from './freidora.page';

const routes: Routes = [
  {
    path: '',
    component: FreidoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreidoraPageRoutingModule {}
