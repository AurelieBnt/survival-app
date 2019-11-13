import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { BarModule } from './bar/bar.module';
import { FooRoutingModule } from './foo-routing.module';



@NgModule({
  declarations: [
    FooComponent
  ],
  imports: [
    CommonModule,
    BarModule,
    FooRoutingModule
  ],
  exports: [
    FooComponent,
    BarModule
  ]
})
export class FooModule { }

