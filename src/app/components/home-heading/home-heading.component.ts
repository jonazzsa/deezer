import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deezer-home-heading',
  templateUrl: './home-heading.component.html',
  styleUrls: ['./home-heading.component.scss']
})
export class HomeHeadingComponent implements OnInit {

  @Input() searchQuery = "";

  constructor() { }

  ngOnInit(): void {
  }

}
