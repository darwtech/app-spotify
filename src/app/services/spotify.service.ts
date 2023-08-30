import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1'; 
  private accessToken = 'BQAjB4X5efuAL4mntz7LIdpzPyfpvg0ve0Pe41FTk45HZm7B8jyQSrV2mfSpYWs8EMjV38IksexOHzUJ6nBtbYuDJz0kkK9Lq5q3LLev3R5-9WRczBAKxtJG61ynTDvqqVwoFjp1PYXfsHcGbC6raiiwzNQBn4TbqgOmhgh2TUxzaVK24m8ZRtzeQO3weN2zQw6vsD_PH9qRI6p9H60oO84bhVIuKIeRZ7MwamoHfizYz7mDpRKOKoDZ4ODvvom9zauNjMWknxcEfHaEagnpVEDbDkUi'; // Tu token de acceso a la API

  constructor(private http: HttpClient) { }

  searchTracks(query: string) {
    const url = `${this.apiUrl}/search?type=track&q=${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`
    });
  
    return this.http.get(url, { headers });
  }
  
}
