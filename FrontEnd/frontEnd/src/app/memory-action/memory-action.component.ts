import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-memory-action',
  templateUrl: './memory-action.component.html',
  styleUrls: ['./memory-action.component.css']
})
export class MemoryActionComponent implements OnInit {
  
  
  num = "";
  flipCard = true;
  cssString: string = '';
  cardOne: string = '0';
  cardTwo: string = '0';
  numberFlip = 0;
  cardOneId = '0';
  cardTwoId = '0';
 
/*
  imgUrl = "./../assets/images/Image-1.jpg";
  imgUrl2 = "./../assets/images/Image-2.jpg";
  imgUrl3 = "./../assets/images/Image-3.jpg";
  imgUrl4 = "./../assets/images/Image-4.jpg";
  imgUrl5 = "./../assets/images/magic.png";
  card = {
    matched: false,
    cardId: '1',

  }
  */
 imgUrl4 = "./../assets/images/Image-4.jpg";
 imgUrl5 = "./../assets/images/magic.png";
 card1 = {
   matched: false,
   cardId: '1',
   imgUl: "./../assets/images/Image-1.jpg",
 }
 card2 = {
   matched: false,
   cardId: '2',
   imgUl: "./../assets/images/Image-2.jpg",
 }
 card3 = {
   matched: false,
   cardId: '3',
   imgUl: "./../assets/images/Image-3.jpg",
 }
 card4 = {
   matched: false,
   cardId: '4',
   imgUl: "./../assets/images/Image-4.jpg",
 }

 card5 = {
   matched: false,
   cardId: '5',
   imgUl: "./../assets/images/magic.png",
 }
 
  cards: any[] = [this.card1, this.card2, this.card3, this.card4, this.card5];
  cards2: any[] = [this.card1, this.card2, this.card3, this.card4, this.card5];
  
  constructor() { 
   
  }

  ngOnInit(): void {
    this.cards = this.cards.concat(this.cards2);
  }
  /*
   Method Name: clickedCard
   param: 
  */
  clickedCard(matched: boolean, cardId: string, index: number){
    console.log("matched " + matched);
    console.log("and the id is " + cardId);
    this.flippedCard(String(index), cardId, matched);
  }
  
  /*
    Method Name: flippedCard
    param: 
    Definition: flip card which was cliked.
  */
  flippedCard(cardIndex: string, cardId: string, matched: boolean){
    this.num = cardIndex;

    console.log("index number ===> " + cardIndex);
    if(this.numberFlip == 2){
      
      let element = document.getElementById(this.cardOne);
      element.className = 'none';
      element = document.getElementById(this.cardTwo);
      element.className = 'none';
      this.numberFlip = 0;
    }
    if(this.numberFlip == 0){ 
      this.cardOne = cardIndex;
      this.cardOneId = cardId;
    }
    if(this.numberFlip == 1) { 
      this.cardTwo = cardId;
      this.cardTwoId = cardId
    }
  
    //console.log("class id is :  " + this.num);
    let element = document.getElementById(cardIndex);
    element.className = 'flip-card-inner';
    this.numberFlip++;
    /*
      check if two card id is match

    */
   if(this.numberFlip == 2){
     this.checkForMatched(this.cardOne, this.cardTwo)

   }


  }
  /*
    Method Name: checkForMatched
    param: two card id
    return: true or false
  */

  checkForMatched(cardOneId: string, cardTwoId: string): boolean{
    console.log("card 1 " +  this.cardOneId + " card2 " + this.cardTwoId);

    if(cardOneId == cardTwoId) {console.log("they are equal");}

    return false;
  }


   /*
    Method Name: randomArrayShuffle
    Return: Shuffled array
  */
 
 randomArrayShuffle(array: string[]){
  var currentIndex = array.length, temporaryValue, randomIndex;
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;


  return array;
 }
  
}
