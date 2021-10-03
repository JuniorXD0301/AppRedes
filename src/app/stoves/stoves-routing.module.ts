import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StovesPage } from './stoves.page';

const routes: Routes = [
  {
    path: '',
    component: StovesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StovesPageRoutingModule {}
