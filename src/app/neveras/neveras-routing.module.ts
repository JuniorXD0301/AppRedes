import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeverasPage } from './neveras.page';

const routes: Routes = [
  {
    path: '',
    component: NeverasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeverasPageRoutingModule {}
