import { Component, OnInit ,Input, Output} from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() login1: boolean = false;
  @Output() login = new EventEmitter();
  
  IWannaLogIn():void{
    this.login1=true;
    this.login.emit("true");
    console.log("in nav bar IwannaLogIn works");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
