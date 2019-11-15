import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SurvivalSharedModule } from 'src/app/survival/shared/modules/survival-shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    IonicModule
  ]
})
export class SharedModule { }
