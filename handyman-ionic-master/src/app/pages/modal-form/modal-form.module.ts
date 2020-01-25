import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalFormPage } from './modal-form.page';
import { ConfirmationModalPageModule } from '../confirmation-modal/confirmation-modal.module';
import { ConfirmationModalPage } from '../confirmation-modal/confirmation-modal.page';

/*const routes: Routes = [
  {
    path: '',
    component: ModalFormPage
  }
];*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [ModalFormPage]
})
export class ModalFormPageModule {}
