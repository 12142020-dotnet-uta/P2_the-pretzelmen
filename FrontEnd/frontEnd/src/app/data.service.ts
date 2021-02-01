import { Injectable } from '@angular/core';
import { fullplayerview } from './fullplayerview';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  sharedData: fullplayerview;

  constructor() { }
}
