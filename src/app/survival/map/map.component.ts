import { Component, AfterViewChecked } from '@angular/core';
import { TitleService } from '../shared/services/title.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewChecked {

  constructor(
    private titleService: TitleService
  ) { }

  ngAfterViewChecked(){
    this.titleService.emitTitle("Map");
  }
}
