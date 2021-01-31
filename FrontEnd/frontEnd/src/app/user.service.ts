import { Injectable } from '@angular/core';
import {User } from './user';
import {from, Observable, of} from 'rxjs';

import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PlayerViewModel } from './playerViewModel';
import { fullplayerview } from './fullplayerview';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  playerview :fullplayerview = new fullplayerview();
  private userUrl = "https://magic-match-api.azurewebsites.net/api/player/"

    httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'

   })
  };

  constructor() { }
}
