import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ModalFormPage } from '../modal-form/modal-form.page';
import { ModalFormPageModule } from '../modal-form/modal-form.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ConfirmationModalPage } from '../confirmation-modal/confirmation-modal.page';
import { ConfirmationModalPageModule } from '../confirmation-modal/confirmation-modal.module';
import { DirectivesModule } from 'src/app/directives/directives.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  entryComponents: [
    ModalFormPage,
    ConfirmationModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFormPageModule,
    ConfirmationModalPageModule,
    ComponentsModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
