import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {

  constructor(public modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-modal-custom'
    });
    return await modal.present();
  }
}

