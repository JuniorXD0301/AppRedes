import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HornosPage } from './hornos.page';

const routes: Routes = [
  {
    path: '',
    component: HornosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HornosPageRoutingModule {}
