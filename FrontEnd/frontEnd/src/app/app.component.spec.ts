import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersComponent } from './players/players.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardCollectionComponent } from './card-collection/card-collection.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardsComponent,
        NavBarComponent,
        MatchHistoryComponent,
        PlayersComponent,
        CardDetailsComponent,
        CardCollectionComponent,
        MemoryGameComponent
      ],
      imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should run IWannaLogIn()', () => {
    component.IWannaLogIn();
    expect(component.login1).toBe(true);
  });
});
