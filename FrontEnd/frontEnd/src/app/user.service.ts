import { Injectable } from '@angular/core';
import {User } from './user';
import {from, Observable, of} from 'rxjs';

import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PlayerViewModel } from './playerViewModel';
import { fullplayerview } from './fullplayerview';
import { LoginPlayerViewModel } from './login-player-view-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private userUrl = "https://magic-match-api.azurewebsites.net/api/player/"

    httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin':'*',
    //'Access-Control-Allow-Methods': 'POST',
    //'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'

   })
  };

  constructor(private http: HttpClient) { }

  LoginPlayer(loginPlayerViewModel: LoginPlayerViewModel): Observable<PlayerViewModel> {
    //use http to post the player and get back the playerviewmodel
    console.log(loginPlayerViewModel);
    return this.http.post<PlayerViewModel>('https://localhost:44301/api/player/login', loginPlayerViewModel, this.httpOptions);
  }

  PlayerList(): Observable<PlayerViewModel[]> {
    return this.http.get<PlayerViewModel[]>('https://localhost:44301/api/player/getplayers');
  }



 // PlayerDetails(playerId: string): Observable<PlayerViewModel> {
 //   return this.http.get<PlayerViewModel>('https://localhost:44345/Player/PlayerDetails/' + playerId);
 // }

  //called by EditPlayer() in EditPlayer component.
  // needs to return a player object to be added to the list OD redirect to the playerlist route to redisplay the list page.
  // OnSubmit of the edited player. the list needs to be updated.
//  EditPlayer(player: PlayerViewModel): void {
    //create sometihng ot send back
 //   this.http.post<PlayerViewModel>('https://localhost:44345/Player/EditedPlayer/', player, this.httpOptions);
 // }
}
