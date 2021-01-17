import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist : any = {}
  loading : boolean;
  top_tracks : Array<any>;

  constructor( 
    private activatedRoute : ActivatedRoute,
    private spotifyService : SpotifyService,
    private location : Location

  ) { 

    this.loading = true

    this.activatedRoute.params.subscribe( params => {
      this.getArtist(params.id)
      this.getTopTracks(params['id'])
    })

  }

  ngOnInit(): void {
  }

  getArtist( id:string ){

    this.spotifyService.getArtist(id)
      .subscribe( artist => {
        this.artist = artist
        this.loading = false
      })

  }

  getTopTracks( id:string ){

    this.spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        this.top_tracks = topTracks
      })
      
  }

  goBack(){
    this.location.back()
  }

}
