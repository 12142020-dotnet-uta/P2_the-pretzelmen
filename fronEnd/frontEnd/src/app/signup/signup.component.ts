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
    password: "*****",
  }
 
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    

  }

  onSubmit(){
    this.userService.getUsers();
    console.log("firstName: " + this.user.firstName);
    console.log("last Name: " + this.user.lastName);
    console.log("Passwored: " + this.user.password);
    console.log("email: " +this.user.email);
  }

}
