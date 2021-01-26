import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  readonly aipUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(  private http: HttpClient,) { }
  getMatchHistory(): Observable<any[]> {
    return this.http.get<any>(this.aipUrl);
  }
}
