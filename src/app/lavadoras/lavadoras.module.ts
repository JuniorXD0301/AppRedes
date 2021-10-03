import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LavadorasPageRoutingModule } from './lavadoras-routing.module';

import { LavadorasPage } from './lavadoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavadorasPageRoutingModule
  ],
  declarations: [LavadorasPage]
})
export class LavadorasPageModule {}
