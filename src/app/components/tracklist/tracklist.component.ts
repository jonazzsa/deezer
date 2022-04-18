import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deezer-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistComponent implements OnInit {

  @Input() topTrackInfo: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
