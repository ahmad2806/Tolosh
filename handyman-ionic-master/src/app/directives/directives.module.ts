import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideheaderDirective } from './hideheader.directive';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HideheaderDirective],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [HideheaderDirective]
})
export class DirectivesModule { }
