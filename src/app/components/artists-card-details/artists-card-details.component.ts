import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deezer-artists-card-details',
  templateUrl: './artists-card-details.component.html',
  styleUrls: ['./artists-card-details.component.scss']
})
export class ArtistsCardDetailsComponent implements OnInit {

  @Input() artistInfo: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
