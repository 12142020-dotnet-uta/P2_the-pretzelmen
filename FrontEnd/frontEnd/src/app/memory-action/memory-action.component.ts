import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-action',
  templateUrl: './memory-action.component.html',
  styleUrls: ['./memory-action.component.css']
})
export class MemoryActionComponent implements OnInit {
  cards: any[] = [1,2,3,4,5,6];
  actionName = 'Go for it';
  isSpecial = true;
  canSave = true;
  classExpression = 'special clearance';
  styleExpression = 'color: red';
  color = 'blue';
  num = "";
  flipCard = true;
  cssString: string = '';
  cardOne: string = '0';
  cardTwo: string = '0';
  numberFlip = 0;

  constructor() { }

  ngOnInit(): void {
  }
  clickedCard(num: string){
    this.num = num;
    
    if(this.numberFlip == 2){
      //console.log("previous clicked id ==> " + this.cardOne);
     // console.log("previous clicked id ==> " + this.cardTwo);
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

  
   // this.cssString = 'flip-card-inner';
  // element.className = flip-card-inner';
    //this.num = num + 1;

   
    //this.getClass();
  }
  getClass(){
    /*
    if(this.cssString.length > 3){
      this.cssString = '';
    }
    */

    
    //return this.cssString;
    //'flip-card-inner';
  }
}
