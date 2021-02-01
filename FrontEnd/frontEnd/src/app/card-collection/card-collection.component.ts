import { Component, OnInit ,Input} from '@angular/core';
import { from } from 'rxjs';
import { CardModel } from '../card-model';
import { ColletionViewModel } from '../colletion-view-model';
import { PlayerService } from '../player.service';
import {DataService} from '../data.service'
import {PlayerViewModel } from '../player-view-model'

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {
  @Input() playerid: string;
  collection: ColletionViewModel = new ColletionViewModel();
  playerViewMode: PlayerViewModel = new PlayerViewModel();
  view = false;
  cards: CardModel[];
  numberOfCards: any[] = [1,2,3,4,5,5,5,5,5,5,5,5,5,5];
  heroes: any[] = [1,2,3,4,5,5,5,5,5,5,5,5,5,5];


  constructor(private playerservice: PlayerService, private dataService: DataService) { }

  ngOnInit(): void {
    this.view = true;
    this.getCollections();
    this.playerViewMode = this.dataService.playerViewModel;
    console.log("player id at card -collection:  " + this.playerViewMode.playerId );
  }

  getCollections()
  {
    this.collection.collectionHolder= this.playerid;
    this.playerservice.GetCollection(this.collection).subscribe(x => this.collection = x);
  }

}
