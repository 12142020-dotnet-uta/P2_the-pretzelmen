import { Component , Input} from '@angular/core';
import { LoginPlayerViewModel } from './login-player-view-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
  loginplayerview: LoginPlayerViewModel = new LoginPlayerViewModel();
  @Input() login1: boolean = false;

  IWannaLogIn():void{
    this.login1=true;
    console.log("IwannaLogIn works");
  }
}

export class CardInfoFromSearch{
  url = 'https://localhost:44301/api/MagicAPI/cardById?${search2}'
}