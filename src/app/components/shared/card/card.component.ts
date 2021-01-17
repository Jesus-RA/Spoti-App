import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items : Array<any> = [];

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  seeArtist( item: any ){

    let artist_id;

    artist_id = item.type === 'artist' ? item.id : item.artists[0].id;

    this.router.navigate([ '/artist', artist_id ])

  }

}
