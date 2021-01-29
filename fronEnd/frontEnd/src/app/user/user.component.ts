import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UserService} from '../user.service'
import {Observable} from "rxjs"
import {PlayerViewModel} from '../playerViewModel'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any=[];
  ActivateAddEdit: boolean = false;
  user: any;



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
  editClick(user){
    console.log("clicked on edit" + user);

    this.user = user;
    this.ActivateAddEdit = true;
  }
 
  deleteClick(user: PlayerViewModel): void{
    console.log('call delet @ user');
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
