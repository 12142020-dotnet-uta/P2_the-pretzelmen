import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { PlayersComponent} from './players/players.component'
import { CardDetailsComponent} from './card-details/card-details.component';
import { CardCollectionComponent } from './card-collection/card-collection.component';
import { MemoryGameComponent} from './memory-game/memory-game.component';



const routes: Routes = [
 { path: 'matchHistory', component: MatchHistoryComponent},
 { path: 'players', component: PlayersComponent},
 { path: 'cardDetails/:id', component: CardDetailsComponent},
 { path: 'cardCollection', component: CardCollectionComponent},
 { path: 'memoryGame', component: MemoryGameComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
