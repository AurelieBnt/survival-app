import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompassComponent } from './compass.component';
import { CompassRoutingModule } from './compass-routing.module';



@NgModule({
  declarations: [
    CompassComponent
  ],
  imports: [
    CommonModule,
    CompassRoutingModule
  ],
  exports: [
    CompassComponent
  ]
})
export class CompassModule { }
