import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'deezer-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  

}
