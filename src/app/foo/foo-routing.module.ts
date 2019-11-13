import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo.component';

const routes: Routes = [
  { path: "foo", component: FooComponent }
]; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FooRoutingModule { }
