import { Title } from '@angular/platform-browser';
import { ApiService } from './../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'deezer-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  artist: any = [];
  topTracks: any = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]; 
  albums: any = [{}, {}, {}, {}, {}];

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getAlbums(params['id']);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getAlbums(id: string): void {
    this.apiService.getAlbums(id).subscribe((data) => {
      this.albums = data;
    });
  }

  getArtist(id: string): void {
    this.apiService.getArtist(id).subscribe((data) => {
      this.artist = data;
      this.title.setTitle(`${this.artist.name} - Deezer`);
    });
  }

  getTopTracks(id: string): void {
    this.apiService.getTopTracks(id).subscribe((data) => {
      this.topTracks = data;
    });
  }
}
