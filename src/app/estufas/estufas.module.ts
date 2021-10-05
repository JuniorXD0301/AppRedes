import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstufasPageRoutingModule } from './estufas-routing.module';

import { EstufasPage } from './estufas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstufasPageRoutingModule
  ],
  declarations: [EstufasPage]
})
export class EstufasPageModule {}
