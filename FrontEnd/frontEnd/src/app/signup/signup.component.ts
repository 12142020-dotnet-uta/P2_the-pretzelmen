import { Component, OnInit } from '@angular/core';

import {User} from '../user'
import {PlayerService} from '../player.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService} from '../user.service';
//import { Location } from '@angular/common';
//
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = {
    firstName: "jim",
    lastName: "lake",
    email: "t@hotmail.com",
    password: "888888",
  
  }
  

  constructor(private playerService: PlayerService, private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(){
   
    //console.log("firstName: " + this.user.firstName.trim());
    //console.log("last Name: " + this.user.lastName.trim());
   // console.log("Passwored: " + this.user.password.trim());
   // console.log("email: " +this.user.email.trim());
     let aUser = {
      userName: this.user.firstName,
      password: this.user.password,
      playerId: "000"
    }
    if(!this.user.firstName){ return;}
     //add user to database by calling user service
   console.log( "ADDED PLAYER:  " + this.playerService.addUser(aUser));
    this.gotBack();

  }
  gotBack(): void{
    this.location.back();
  }

}
