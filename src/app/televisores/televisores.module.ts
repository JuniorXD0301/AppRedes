import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelevisoresPageRoutingModule } from './televisores-routing.module';

import { TelevisoresPage } from './televisores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelevisoresPageRoutingModule
  ],
  declarations: [TelevisoresPage]
})
export class TelevisoresPageModule {}
