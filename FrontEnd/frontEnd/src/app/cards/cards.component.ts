import { Component, OnInit } from '@angular/core';
import {Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  card: Card = {
  id: 1,
  cardId: 12,
  imageURL:"",
  qty: 1,
  attackNumber: 2,
  defenseNumber: 3,
  inDeck: true,
  cardClass: "yes",
  cardName: 'Magic card',
  collectionID: '123456789'
 };

 cards: Card[];
  constructor() { }

  ngOnInit(): void {
  }

}
