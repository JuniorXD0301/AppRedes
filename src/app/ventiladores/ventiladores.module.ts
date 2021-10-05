import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentiladoresPageRoutingModule } from './ventiladores-routing.module';

import { VentiladoresPage } from './ventiladores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentiladoresPageRoutingModule
  ],
  declarations: [VentiladoresPage]
})
export class VentiladoresPageModule {}
