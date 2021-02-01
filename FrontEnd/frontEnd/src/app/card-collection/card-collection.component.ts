import { Component, OnInit ,Input} from '@angular/core';
import { CardModel } from '../card-model';
import { ColletionViewModel } from '../colletion-view-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {
  @Input() playerid: string;
  collection: ColletionViewModel = new ColletionViewModel();
 
  cards: CardModel[];
  numberOfCards: any[] = [1,2,3,4,5,5,5,5,5,5,5,5,5,5];
  heroes: any[] = [1,2,3,4,5,5,5,5,5,5,5,5,5,5];


  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.collection.collectionHolder= this.playerid;
    
  }

}
