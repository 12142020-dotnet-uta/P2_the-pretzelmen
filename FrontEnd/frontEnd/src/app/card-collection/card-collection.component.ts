import { Component, OnInit ,Input} from '@angular/core';
import { flattenDiagnosticMessageText } from 'typescript';
import { CardModel } from '../card-model';
import { ColletionViewModel } from '../colletion-view-model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {
  @Input() playerid: string;
  collection: ColletionViewModel = new ColletionViewModel();
  view = false;
  cards: CardModel[];
  numberOfCards: any[] = [1,2,3,4,5,5,5,5,5,5,5,5,5,5];
  heroes: any[] = [1,2,3,4,5,5,5,5,5,5,5,5,5,5];


  constructor(private playerservice: PlayerService) { }

  ngOnInit(): void {
    this.view = true;
    this.getCollections();
  }

  getCollections()
  {
    this.collection.collectionHolder= this.playerservice.getPlayer();
    this.playerservice.GetCollection(this.collection).subscribe(x => this.collection = x);
  }

}
