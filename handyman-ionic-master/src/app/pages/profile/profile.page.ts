import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalFormPage } from '../modal-form/modal-form.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  item: any;
  images = [];
  reviews = [];

  valueType = 'info';

  constructor(
    public actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ionViewWillEnter() {
    const itemId = +this.route.snapshot.paramMap.get('id');
    this.item = this.dataService.getDataById(itemId);
  }

  ngOnInit() {
    this.getReviews();
    this.getImages();
  }

  async onClick() {
    const modal = await this.modalCtrl.create({
      component: ModalFormPage,
      cssClass: 'modal-transparency',
      id: 'ModalForm'
    });
    return await modal.present();
  }

  getReviews() {
    this.reviews = this.dataService.getReviews();
  }

  getImages() {
    this.images = this.dataService.getImages();
  }
}
