import { Component, AfterViewChecked } from '@angular/core';
import { TitleService } from '../shared/services/title.service';
import { DegreeService } from './shared/services/degree.service';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent implements AfterViewChecked {

  protected degree: number;

  constructor(
    private titleService: TitleService,
    private degreeService: DegreeService 
  ) {
    this.degree = 0;
    this.degreeService.getDegree().subscribe((degree: number) => this.degree = 30 < degree ? 30 : (-30 > degree) ? -30 : Math.round(degree *100) /100);
   }

  ngAfterViewChecked() {
    this.titleService.emitTitle("Bubble");
  }
}
