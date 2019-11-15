import { Component } from '@angular/core';
import { DegreeService } from 'src/app/survival/bubble/shared/services/degree.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss'],
})
export class DegreeComponent {

  protected degree: number;

  constructor(
    private degreeService: DegreeService
  ) {
    this.degree = 0;
    this.degreeService.getDegree().subscribe((degree: number) => this.degree = degree);
  }
}
