import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deezer-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() artistInfo: any = {}
  @Input() albumInfo: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
