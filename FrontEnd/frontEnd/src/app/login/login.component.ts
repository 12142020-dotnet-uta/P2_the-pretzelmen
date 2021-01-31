import { Component, OnInit ,Input} from '@angular/core';
import { PlayerViewModel } from 'src/app/playerViewModel';
import { LoginPlayerViewModel } from '../login-player-view-model';

import { NgModule } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPlayerViewModel: LoginPlayerViewModel = new LoginPlayerViewModel();// = new LoginPlayerViewModel();
  playerViewModel: PlayerViewModel = new PlayerViewModel();
  @Input() login1: boolean = false;

  //used mainly for DI
  constructor(private userService: UserService) { }

  // Used to initiate the component and it's variables, lists, observables, etc.
  // Best Practice is to do this here..NOT in the constructor
  ngOnInit(): void {
  }

  OnSubmit(): void {
    this.login1 = false;
    this.userService.LoginPlayer(this.loginPlayerViewModel).subscribe(x => this.playerViewModel = x);
    console.log("Here after the call to the service.");

  }
}
