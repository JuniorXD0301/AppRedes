import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StovesPageRoutingModule } from './stoves-routing.module';

import { StovesPage } from './stoves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StovesPageRoutingModule
  ],
  declarations: [StovesPage]
})
export class StovesPageModule {}
