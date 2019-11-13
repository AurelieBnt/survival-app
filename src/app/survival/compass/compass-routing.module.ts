import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompassComponent } from './compass.component';

const routes: Routes = [
  { path: "compass", component: CompassComponent }
]; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompassRoutingModule { }
