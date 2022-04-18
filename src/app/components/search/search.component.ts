import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deezer-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchArtists = new EventEmitter<string>();
  searchQuery: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  search(): void{
    this.searchArtists.emit(this.searchQuery)
  }

}
