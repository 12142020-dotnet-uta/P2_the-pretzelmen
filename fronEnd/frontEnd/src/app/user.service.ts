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
  private userUrl = "https://magic-match-api.azurewebsites.net/api/player/"
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private messageService: MessageService, private http: HttpClient) {

   }
 /* Get users from the server */
 getUsers(): Observable<any[]> {
   console.log("get player:   " + this.http.get<any[]>(this.userUrl));
   return this.http.get<any[]>(this.userUrl)
   .pipe(
     tap(_ => this.log('getched users')),
     catchError(this.handleError<any[]>('getUsers', []))
   );
 }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - get user by id
 * @param result - return a user
 */
getUser(id: string): Observable<any>{
  const url = `${this.userUrl}/{id}`;
  return this.http.get<any>(url)
      .pipe(
        tap(_ => this.log(`etched hero id={id}`)),
        catchError(this.handleError<any>(`getuser id ={id}` ))
      );
}

 /** PUT: update the hero on the server */
updateUser(user: User): Observable<any> {
  return this.http.put(this.userUrl, user, this.httpOptions).pipe(
    //tap(_ => this.log(`updated user id=${user.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
/** POST: add a new hero to the server */
addUser(user: any): Observable<any> {
  const headers ={ 'content-type': 'application/json'}
  const body = JSON.stringify(user);
  console.log(body);
  return this.http.post('https://magic-match-api.azurewebsites.net/api/player/CreatePlayer', body, this.httpOptions)
    .pipe(
      //tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<any>('add user'))
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
  //this.messageService.add(`HeroService: ${message}`);
}
 
}
