import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UserService} from '../user.service'
import {Observable} from "rxjs"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any=[];

  constructor(private userService: UserService) { 
    
  }

  ngOnInit(): void  {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(data =>{
      this.users = data;
    })
  }
 

}
