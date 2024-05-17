import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1'; 
  private accessToken = ''; // Aqui pongan su token de acceso a la API

  constructor(private http: HttpClient) { }

  searchTracks(query: string) {
    const url = `${this.apiUrl}/search?type=track&q=${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`
    });
  
    return this.http.get(url, { headers });
  }
  
}
