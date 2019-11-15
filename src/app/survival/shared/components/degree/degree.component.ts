import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss'],
})
export class DegreeComponent {

  @Input() degree: number;

  constructor() {}
}
