import { Component, OnInit , Input} from '@angular/core';
import {UserService} from '../user.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user'

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private location: Location) { }

  @Input() emp:any;
  user: User = {
    firstName: "jim",
    lastName: "lake",
    email: "t@hotmail.com",
    password: "888888",
  
  }
 
  
  ngOnInit(): void {
    this.getUser()
   
    
  }
  getUser(): void{
    console.log("get user data : " + history.state.data);
    const id = +this.route.snapshot.paramMap.get('user');
    console.log("get from snap shot : "  + id);
    //const id = +this.route.snapshot.paramMap.get('id');
  }

}
