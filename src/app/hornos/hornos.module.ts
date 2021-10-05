import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HornosPageRoutingModule } from './hornos-routing.module';

import { HornosPage } from './hornos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HornosPageRoutingModule
  ],
  declarations: [HornosPage]
})
export class HornosPageModule {}
