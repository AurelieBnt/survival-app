import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModule } from './map/map.module';
import { CompassModule } from './compass/compass.module';
import { BubbleModule } from './bubble/bubble.module';
import { SurvivalComponent } from './survival.component';
import { SurvivalRoutingModule } from './survival-routing.module';



@NgModule({
  declarations: [
    SurvivalComponent
  ],
  imports: [
    CommonModule,
    BubbleModule,
    CompassModule,
    MapModule,
    SurvivalRoutingModule 
  ],
  exports: [
    SurvivalComponent
  ]
})
export class SurvivalModule { }
