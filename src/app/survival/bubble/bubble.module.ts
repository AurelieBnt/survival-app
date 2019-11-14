import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble.component';
import { BubbleRoutingModule } from './bubble-routing.module';
import { SurvivalSharedModule } from '../shared/modules/survival-shared.module';



@NgModule({
  declarations: [
    BubbleComponent
  ],
  imports: [
    CommonModule,
    SurvivalSharedModule,
    BubbleRoutingModule
  ]
})
export class BubbleModule { }
