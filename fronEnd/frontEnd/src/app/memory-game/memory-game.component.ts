import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import { trigger, state, style, transition, animate } from '@angular/animations';
import {ChangeDetectionStrategy} from '@angular/core'


@Component({
  selector: 'app-memory-game',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css'],
})
export class MemoryGameComponent implements OnInit {
 
  cards: any[] = [1,2,3,4,5,6,7,8,9,10];
  
  constructor(private usrService: UserService) { }

  ngOnInit(): void {
   
  }
  onSelectCard(){
    console.log("clicked card number:  " + 2);
  }

}
