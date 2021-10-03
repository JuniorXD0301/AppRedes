import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeverasPageRoutingModule } from './neveras-routing.module';

import { NeverasPage } from './neveras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeverasPageRoutingModule
  ],
  declarations: [NeverasPage]
})
export class NeverasPageModule {}
