import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';// reactive extensions
import { SpotifystoreService } from './spotifystore.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token : string

  constructor( private http : HttpClient, private spotifyStore : SpotifystoreService ) { 
    
    this.getToken()
      .subscribe(data => {
        this.token = data['access_token']
        this.spotifyStore.addToken(this.token)
      })

    // this.spotifyStore.spotify$.subscribe(data => {

    //   this.token = data

    //   this.token = this.spotifyStore.getToken()
    //   console.log("Service data:", this.spotifyStore.getToken())

    //   if(this.token === ''){
    //     console.log('entré')
    //     // this.spotifyStore.addToken(this.token)
    //   }
    // })
  }

  getQuery( query : string ){

    const url = `https://api.spotify.com/v1/${ query }`
    
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.token}` ,
    });

    return this.http.get( url , { headers } );

  }

  getToken() {

    let body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', 'e809d61c381c43daa7095ca4fa6b63c4')
      .set('client_secret', 'b9d5afe8bef44c97a58a2a13059e7f1a');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')

    // Pedir token
    return this.http.post("https://accounts.spotify.com/api/token", body, { headers } )
      
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map( data =>  data['albums'].items ) )
      // con objeto.['propiedad'] decimos que busque la propiedad mencionada en el objeto y así ya no marcará error

  }

  getArtists( artist : string ){

    return this.getQuery( `search?q=${artist}&type=artist` )
      .pipe( map( data => data['artists'].items ) )

  }

  getArtist( id:string ){
    return this.getQuery( `artists/${ id }` );
  }

  getTopTracks( id:string ){

    return this.getQuery( `artists/${id}/top-tracks?country=us` )
      .pipe( map( data => data['tracks']) )

  }

}
