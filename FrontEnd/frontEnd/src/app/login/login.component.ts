

import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { PlayerViewModel } from '../player-view-model';
import { LoginPlayerViewModel } from '../login-player-view-model';

import { NgModule } from '@angular/core';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPlayerViewModel: LoginPlayerViewModel = new LoginPlayerViewModel();// = new LoginPlayerViewModel();
  playerViewModel1: PlayerViewModel = new PlayerViewModel();
  @Input() login: boolean;
  @Output() playerevent = new EventEmitter<LoginPlayerViewModel>();

  //used mainly for DI
  constructor(private playerservice: PlayerService) { }

  // Used to initiate the component and it's variables, lists, observables, etc.
  // Best Practice is to do this here..NOT in the constructor
  ngOnInit(): void {
  }

  OnSubmit(): void {
    this.playerservice.LoginPlayer(this.loginPlayerViewModel).subscribe(x => this.playerViewModel1 = x);
    this.playerevent.emit(this.loginPlayerViewModel);
    this.login = false;
  }
  
}

