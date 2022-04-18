import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deezer-artists-card',
  templateUrl: './artists-card.component.html',
  styleUrls: ['./artists-card.component.scss']
})
export class ArtistsCardComponent implements OnInit {

  @Input() artistInfo: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
