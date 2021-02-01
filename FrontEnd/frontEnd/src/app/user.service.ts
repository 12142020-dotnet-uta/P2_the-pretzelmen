import { Injectable } from '@angular/core';
import {User } from './user';
import {from, Observable, of} from 'rxjs';

import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { fullplayerview } from './fullplayerview';
import { LoginPlayerViewModel } from './login-player-view-model';
import { PlayerViewModel } from './player-view-model';
import { ColletionViewModel } from './colletion-view-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  playerViewModel: PlayerViewModel = new PlayerViewModel();

  //private userUrl = "https://magic-match-api.azurewebsites.net/api/player/"
  private userUrlLocal = "https://localhost:44301/api/player/";
  private usercollection = "https://localhost:44301/api/collection/";

  private userUrlRemote = "https://magic-match-api.azurewebsites.net/api/player/";

    httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Respose-Type': 'json'
   })
  };

  constructor(private http: HttpClient) { }

  LoginPlayer(loginPlayerViewModel: LoginPlayerViewModel): Observable<PlayerViewModel> {
    //use http to post the player and get back the playerviewmodel
    //this.http.post<PlayerViewModel>(this.userUrlLocal + 'login', loginPlayerViewModel, this.httpOptions).subscribe(x=>this.playerViewModel = x);
    return this.http.post<PlayerViewModel>(this.userUrlLocal + 'login', loginPlayerViewModel, this.httpOptions);
  }
  getPlayer():PlayerViewModel{
    return this.playerViewModel;
  }

  GetCollection(collection: LoginPlayerViewModel): Observable<ColletionViewModel> {
    return this.http.get('https://localhost:44301/api/collection/collections', collection,this.httpOptions);
  }

  sendtoRoot(player: PlayerViewModel)
  {

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
