import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmationModalPage } from '../confirmation-modal/confirmation-modal.page';
// import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.page.html',
  styleUrls: ['./modal-form.page.scss'],
})
export class ModalFormPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async confirmModal() {
    const modal = await this.modalController.create({
      component: ConfirmationModalPage,
      cssClass: 'modal-container'
    });
    this.modalController.dismiss(null, null, 'ModalForm')
    return await modal.present();
  }

}
