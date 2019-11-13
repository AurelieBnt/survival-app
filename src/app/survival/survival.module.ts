import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurvivalComponent } from './survival.component';
import { SurvivalRoutingModule } from './survival-routing.module';
import { SharedModule } from '../shared/modules/shared.module';



@NgModule({
  declarations: [
    SurvivalComponent
  ],
  imports: [
    CommonModule,
    SurvivalRoutingModule,
    SharedModule
  ]
})
export class SurvivalModule { }
