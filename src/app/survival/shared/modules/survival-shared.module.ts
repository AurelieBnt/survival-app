import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeModule } from '../components/degree/degree.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DegreeModule,
  ],
  exports: [
    DegreeModule
  ]
})
export class SurvivalSharedModule { }
