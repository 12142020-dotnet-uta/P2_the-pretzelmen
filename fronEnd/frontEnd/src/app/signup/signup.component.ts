import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {User} from '../user'
import {UserService} from '../user.service'


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
 
 
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    

  }

  onSubmit(){
    this.userService.getUsers();
    console.log("firstName: " + this.user.firstName.trim());
    console.log("last Name: " + this.user.lastName.trim());
    console.log("Passwored: " + this.user.password.trim());
    console.log("email: " +this.user.email.trim());
     let aUser = {
      username: "jimLake",
      password: "lallll"
    }
    if(!this.user.firstName){ return;}
     //add user to database by calling user service
     console.log( "ADDED PLAYER:  " + this.userService.addUser(aUser));

  }

}
