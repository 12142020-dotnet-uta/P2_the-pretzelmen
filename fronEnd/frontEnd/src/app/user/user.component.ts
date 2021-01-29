import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { from } from 'rxjs';
import {UserService} from '../user.service'
import {Observable} from "rxjs"
import {PlayerViewModel} from '../playerViewModel'
import { Router } from '@angular/router';
import { fullplayerview } from '../fullplayerview';
import { DataService } from '../data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[];
  ActivateAddEdit: boolean = false;
  user: any;

  @Input() selected: any
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();


  constructor(
    private userService: UserService, 
    private router: Router,
    private dataService : DataService
    ) { }

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
  setData(user: fullplayerview){
    console.log("set data is called");
    this.dataService.sharedData = user;
  }

}
