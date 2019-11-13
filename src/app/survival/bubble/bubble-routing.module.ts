import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BubbleComponent } from './bubble.component';

const routes: Routes = [
  { path: "bubble", component: BubbleComponent }
]; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BubbleRoutingModule { }
