import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import {UserService} from '../user.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user'
import { fullplayerview } from '../fullplayerview' 
import {DataService} from '../data.service'


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {


  @Input() incomingUser : fullplayerview;
   //user: fullplayerview = new fullplayerview();
   user: fullplayerview = {
    userName: "nnn",
    password: 123,
    wins: 0,
    losses: 0,
    tokens: 0,
    login: false,
    playerId: "ddd",
    collection: {},

  }

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService,
    ) {}
    
  
  ngOnInit(): void {
    this.getUser()
   
    
  }
  /*//
  *
  * get user from shared data at data service
  *
  *///

  getUser(): void{
   // console.log("incoming user " + this.incomingUser);
   // console.log("get user data : " + history.state.data);
    //const id = +this.route.snapshot.paramMap.get('user');
   // console.log("get from snap shot : "  + id);
    
    this.user = this.dataService.sharedData;
    //console.log("data service give me : " + this.user)
    //const id = +this.route.snapshot.paramMap.get('id');
  }
  /*
  * submit changed data to store in server
  */
  submit(): void{
    this.userService.updateUser(this.user).subscribe(() => this.goBack());

  }

  goBack(): void{
    this.location.back();
  }
  

}
