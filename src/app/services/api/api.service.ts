import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAlbums(query: string): Observable<any>{
    return this.http.get<any>(`${environment.base}/albums?q=${query}`); 
  } 

  getArtist(query: string): Observable<any>{
    return this.http.get<any>(`${environment.base}/artist?q=${query}`); 
  } 

  getArtists(query: string): Observable<any>{
    return this.http.get<any>(`${environment.base}/artists?q=${query}`); 
  } 

  getTopTracks(query: string): Observable<any>{
    return this.http.get<any>(`${environment.base}/top-tracks?q=${query}`); 
  } 
}
