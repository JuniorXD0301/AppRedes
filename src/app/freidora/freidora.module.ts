import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreidoraPageRoutingModule } from './freidora-routing.module';

import { FreidoraPage } from './freidora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreidoraPageRoutingModule
  ],
  declarations: [FreidoraPage]
})
export class FreidoraPageModule {}
