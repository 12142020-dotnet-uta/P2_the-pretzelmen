import { Component, OnInit } from '@angular/core';
import { PlayerViewModel } from '../playerViewModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playerList: PlayerViewModel[]; 
  selectedPlayer: PlayerViewModel = new PlayerViewModel();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.PlayerList().subscribe(x => this.playerList = x);
  }

}
