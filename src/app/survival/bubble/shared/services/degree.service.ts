import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  private degree: Subject<number>;
    
  constructor() {
    this.degree = new Subject();
    window.ondeviceorientation = (event) => this.degree.next(event.gamma);
  }

  getDegree(): Observable<number>{
    return this.degree.asObservable();
  }
}
