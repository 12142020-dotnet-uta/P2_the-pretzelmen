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

  //cards: any[] = [this.imgUrl, this.imgUrl2, this.imgUrl3, this.imgUrl4, this.imgUrl5];
  constructor() { }

  ngOnInit(): void {
  }
  clickedCard(card: string, cardId: string, index: number){
    console.log(card);
    console.log("and the id is " + cardId);
    this.flippedCard(String(index));
  }
  
  flippedCard(num: string){
    this.num = num;
    console.log("index number ===> " + num);
    if(this.numberFlip == 2){
      
      let element = document.getElementById(this.cardOne);
      element.className = 'none';
      element = document.getElementById(this.cardTwo);
      element.className = 'none';
      this.numberFlip = 0;
    }
    if(this.numberFlip == 0){ this.cardOne = num};
    if(this.numberFlip == 1) { this.cardTwo = num};
  
    //console.log("class id is :  " + this.num);
    let element = document.getElementById(num);
    element.className = 'flip-card-inner';

    this.numberFlip++;
    console.log("number of flip===> " + this.numberFlip);

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
