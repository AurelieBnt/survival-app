import { Component } from '@angular/core';
import { DegreeService } from '../shared/services/degree.service';

@Component({
  selector: 'app-view-bubble',
  templateUrl: './view-bubble.component.html',
  styleUrls: ['./view-bubble.component.scss'],
})
export class ViewBubbleComponent {

  protected degree: number;

  constructor(
    private degreeService: DegreeService 
  ) {
    this.degree = 0;
    this.degreeService.getDegree().subscribe((degree: number) => this.degree = degree);
   }
}
