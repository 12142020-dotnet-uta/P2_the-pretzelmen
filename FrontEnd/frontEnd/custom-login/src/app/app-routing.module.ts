
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { PlayersComponent} from './players/players.component'
import { CardDetailsComponent} from './card-details/card-details.component';
import { CardCollectionComponent } from './card-collection/card-collection.component';
import { MemoryGameComponent} from './memory-game/memory-game.component';
import {HomeComponent} from './home/home.component';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {MessagesComponent} from './messages/messages.component';





const routes: Routes = [
 { path: 'matchHistory', component: MatchHistoryComponent},
 { path: 'players', component: PlayersComponent},
 { path: 'cardDetails/:id', component: CardDetailsComponent},
 { path: 'cardCollection', component: CardCollectionComponent},
 { path: 'memoryGame', component: MemoryGameComponent},
 {
  path: '',
  component: HomeComponent,
},
{
  path: 'login/callback',
  component: OktaCallbackComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [ OktaAuthGuard ],
},
{
  path: 'messages',
  component: MessagesComponent,
  canActivate: [ OktaAuthGuard ],
},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }