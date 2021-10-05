import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstufasPage } from './estufas.page';

const routes: Routes = [
  {
    path: '',
    component: EstufasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstufasPageRoutingModule {}
