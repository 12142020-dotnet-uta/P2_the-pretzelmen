//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import{ Card} from '../card';
import {CardService} from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards = "";
  @Input()
  result$: Observable<any>;

  constructor(private cardService: CardService) {
    this.result$ = cardService.resolveItems();
   }

  ngOnInit(): void {
   this.getCards();
   console.log("constructor at card component");
  }
  
  /// <summary>
  /// This Method retun a l
  /// </summary>
  /// <param> none</param>
  getCards(): void{
    console.log("constructor at card component");
    this.cardService.resolveItems();
   // console.log(this.cardService.getCards());
      //.subscribe(cards => this.cards = cards);
  }

}
