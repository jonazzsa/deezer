import { ApiService } from './../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'deezer-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artistsData: any = [];
  searchQuery: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    //placeholer
    this.artistsData = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    this.seachArtists('');
    this.title.setTitle('Deezer - Home');
  }

  seachArtists(e: any): void {
    this.searchQuery = e;
    this.apiService.getArtists(this.searchQuery).subscribe(data => {
      this.artistsData = data;
    });
  }

  goToDetails(id: number): void {
    if (id) this.router.navigate([`/details/${id}`]);
  }
}
