import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss'],
})
export class DegreeComponent {

  protected degree: number;

  constructor() {
    this.degree = 0;
   }
}
