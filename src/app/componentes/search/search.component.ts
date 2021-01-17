import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists : Array<any> = []
  loading : boolean;

  constructor( private spotifyService : SpotifyService ) {}

  ngOnInit(): void {
  }

  search( artist : string ){

    this.loading = true

    this.spotifyService.getArtists(artist)
      .subscribe( (data : any) => {
        this.artists = data
        this.loading = false
      })
  }

}
