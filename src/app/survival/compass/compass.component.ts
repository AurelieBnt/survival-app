import { Component, AfterViewChecked } from '@angular/core';
import { TitleService } from '../shared/services/title.service';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss'],
})
export class CompassComponent implements AfterViewChecked {

  constructor(
    private titleService: TitleService
  ) { }

  ngAfterViewChecked() {
    this.titleService.emitTitle("Compass");
  }
}
