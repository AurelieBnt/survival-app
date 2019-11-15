import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBubbleComponent } from './view-bubble.component';



@NgModule({
  declarations: [
    ViewBubbleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ViewBubbleComponent
  ]
})
export class ViewBubbleModule { }
