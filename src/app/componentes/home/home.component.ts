import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { SpotifystoreService } from 'src/app/services/spotifystore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  new_releases : Array<any> = []
  loading : boolean;
  error : boolean;
  error_message : string;

  constructor(
    private spotifyService : SpotifyService,
    private spotifyStore : SpotifystoreService
  ) {
    
    this.loading = true
    this.error = false

    this.spotifyService.getNewReleases()

      .subscribe( ( data : any) => {

        this.new_releases = data
        this.loading = false

      }, (serviceError) => {

        this.loading = false
        this.error = true
        this.error_message = serviceError.error.error.message
        
        if(this.error_message === 'Invalid access token'){
          
          this.error = false
          
        }
        
      })
  }

  ngOnInit(): void {

  }

}
