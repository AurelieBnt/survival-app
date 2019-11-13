import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble.component';
import { BubbleRoutingModule } from './bubble-routing.module';



@NgModule({
  declarations: [
    BubbleComponent
  ],
  imports: [
    CommonModule,
    BubbleRoutingModule
  ],
  exports: [
    BubbleComponent
  ]
})
export class BubbleModule { }
