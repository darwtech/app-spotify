import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  playlistId = '446OXlxt8atYL8aBhIYg8F';

  constructor(private spotifyService: SpotifyService,private sanitizer: DomSanitizer){}

  search(): void {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
      return;
    }
    this.spotifyService.searchTracks(this.searchQuery).subscribe((data: any) => {
      this.searchResults = data.tracks.items;
    });
  }
  getEmbedUrl(): SafeResourceUrl {
    const url = `https://open.spotify.com/embed/playlist/${this.playlistId}?utm_source=generator&theme=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  formatDuration(duration: number): string {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds}`;
  }
  
}
