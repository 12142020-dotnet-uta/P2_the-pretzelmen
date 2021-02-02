import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCollectionComponent } from './card-collection.component';
import { PlayerService } from '../player.service';
import { DataService } from '../data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ColletionViewModel } from '../colletion-view-model';
import { PlayerViewModel } from '../player-view-model';
import { of } from 'rxjs';
import { fullplayerview } from '../fullplayerview';

describe('CardCollectionComponent', () => {
  let component: CardCollectionComponent;
  let fixture: ComponentFixture<CardCollectionComponent>;
  let mockPlayerService;
  let mockCollection;

  let playerList = [
    {
      playerId: 'b9084d13-3a7a-4957-89bf-e7618e83e649',
      userName: 'tylercadena',
      password: 'revature',
      login: false,
      wins: 0,
      losses: 0,
      tokens: 0
    }
  ] as PlayerViewModel[];

  let collectionList = [
    {
      collectionHolder: 'b9084d13-3a7a-4957-89bf-e7618e83e649',
      collectionId: 'b9084d13-3a7a-4957-89bf-e7618e83e649',
      quantity: 98
    }
  ] as ColletionViewModel[];

  let mockDataService: DataService = {
    playerViewModel: playerList[0],
    sharedData: new fullplayerview()
  };

  beforeEach(async () => {
    mockPlayerService = jasmine.createSpyObj('PlayerService', ['GetCollection']);
    mockCollection = mockPlayerService.GetCollection.and.returnValue(of(collectionList[0]));
    await TestBed.configureTestingModule({
      declarations: [ CardCollectionComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PlayerService, useValue: mockPlayerService },
        { provide: DataService, useValue: mockDataService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit() and getCollections()', () => {
    component.playerid = 'b9084d13-3a7a-4957-89bf-e7618e83e649';
    component.ngOnInit();
    expect(component.view).toBe(true);
    expect(component.collection.collectionHolder).toBe('b9084d13-3a7a-4957-89bf-e7618e83e649');
    expect(component.playerViewMode.playerId).toBe('b9084d13-3a7a-4957-89bf-e7618e83e649');
    expect(mockCollection.calls.any()).toBe(true);
  });
});
