import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {
 

  
  constructor(private usrService: UserService) { }

  ngOnInit(): void {
   
  }
  
}
