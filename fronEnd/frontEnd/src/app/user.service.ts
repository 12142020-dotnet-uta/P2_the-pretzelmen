import { Injectable } from '@angular/core';
import {User } from './user';
import {from, Observable, of} from 'rxjs';
import { MessageService} from './message.service'
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://magic-match-api.azurewebsites.net/api/player/GetPlayers"

  constructor( private messageService: MessageService, private http: HttpClient) {

   }
 /* Get users from the server */
 getUsers(): Observable<any[]> {
   console.log("get player:   " + this.http.get<any[]>(this.url));
   return this.http.get<any[]>(this.url)
   .pipe(
     tap(_ => this.log('getched users')),
     catchError(this.handleError<any[]>('getUsers', []))
   );
 }


 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

 /** Log a HeroService message with the MessageService */
 private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
 
}
