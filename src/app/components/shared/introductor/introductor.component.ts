import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-introductor',
  templateUrl: './introductor.component.html',
  styleUrls: ['./introductor.component.css']
})
export class IntroductorComponent implements OnInit {

  constructor(
    private spotifyService : SpotifyService
  ) {
    
    this.spotifyService.getToken()

  }

  ngOnInit(): void {
  }

}
