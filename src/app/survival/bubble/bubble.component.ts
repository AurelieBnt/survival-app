import { Component, AfterViewChecked } from '@angular/core';
import { TitleService } from '../shared/services/title.service';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent implements AfterViewChecked {

  constructor(
    private titleService: TitleService
  ) { }

  ngAfterViewChecked() {
    this.titleService.emitTitle("Bubble");
  }

}
