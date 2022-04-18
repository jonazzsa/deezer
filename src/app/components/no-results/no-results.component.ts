import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deezer-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss']
})
export class NoResultsComponent implements OnInit {

  @Input() search: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
