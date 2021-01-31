import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
}

export class CardInfoFromSearch{
  url = 'https://localhost:44301/api/MagicAPI/cardById?${search2}'
}