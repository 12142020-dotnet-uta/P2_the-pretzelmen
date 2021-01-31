import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-action',
  templateUrl: './memory-action.component.html',
  styleUrls: ['./memory-action.component.css']
})
export class MemoryActionComponent implements OnInit {
  cards: any[] = [1,2,3,4,5,6,7,8,9,10];
  actionName = 'Go for it';
  isSpecial = true;
  canSave = true;
  classExpression = 'special clearance';
  styleExpression = 'color: red';
  color = 'blue';
  num = "";
  flipCard = true;
  cssString: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  clickedCard(num: string){
    this.num = num;
    console.log("class id is :  " + this.num);
    let element = document.getElementById(num);
    element.className = 'flip-card-inner';
   // this.cssString = 'flip-card-inner';
  // element.className = flip-card-inner';
    //this.num = num + 1;
    this.flipCard = true;
    console.log("CARD ID + " + this.num)
    this.getClass();
  }
  getClass(){
    /*
    if(this.cssString.length > 3){
      this.cssString = '';
    }
    */

    console.log("get class is called ");
    return this.cssString;
    //'flip-card-inner';
  }
}
