import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  isActive: boolean = false;
  sidebarToggle: Subject<boolean> = new Subject<boolean>();

  constructor() { 
    this.sidebarToggle.subscribe((value) => {
      this.isActive = value
  });
  }

 
  menuToggle() {
       this.sidebarToggle.next(!this.isActive);
  }

 
}
