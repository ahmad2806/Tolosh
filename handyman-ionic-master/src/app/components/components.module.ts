import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardCategoriesComponent } from './card-categories/card-categories.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardAppointmentComponent } from './card-appointment/card-appointment.component';
import { CardReviewComponent } from './card-review/card-review.component';
import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    StarRatingModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    CardCategoriesComponent,
    CardInfoComponent,
    CardAppointmentComponent,
    CardReviewComponent
  ],
  exports: [
    CardCategoriesComponent,
    CardInfoComponent,
    CardAppointmentComponent,
    CardReviewComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
