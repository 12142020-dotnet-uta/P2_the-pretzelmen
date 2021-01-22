import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url = 'https://api.magicthegathering.io/v1/cards';

  constructor(  private http: HttpClient) { }
  resolveItems(): Observable<any>{
    console.log("constructor at service ");
    console.log(this.http.get(this.url + "any value"));
   return this.http.get(this.url);
  }
}
