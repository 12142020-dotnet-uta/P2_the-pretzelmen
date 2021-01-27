import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) {

  } 

  ngOnInit(): void {
    console.log("token" +  this.oktaAuth.getAccessToken());
  }

}
