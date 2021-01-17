import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifystoreService {

  private readonly _spotifyTokenSource  = new BehaviorSubject<string>('');

  readonly spotify$ = this._spotifyTokenSource.asObservable();

  constructor() { }

  getToken(){
    return this._spotifyTokenSource.getValue();
  }

  private _setToken( token: string ){
    this._spotifyTokenSource.next(token);
  }

  addToken( token:string ){
    this._setToken(token);
  }

  removeToken(){
    this._setToken('');
  }

}
