import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PlayerService } from './player.service';
import { PlayerViewModel } from './player-view-model';
import { LoginPlayerViewModel } from './login-player-view-model';
import { fullplayerview } from './fullplayerview';

describe('PlayerService', () => {
  let service: PlayerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PlayerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getUsers', () => {
    let dummyPlayers: PlayerViewModel[];
    beforeEach(() => {
      dummyPlayers = [
        {
          playerId: 'b9084d13-3a7a-4957-89bf-e7618e83e649',
          userName: 'tylercadena',
          password: 'revature',
          login: false,
          wins: 0,
          losses: 0,
          tokens: 0
        },
        {
          playerId: '51fdd656-245b-4e55-b4fd-a3a1c35a9def',
          userName: 'billybob',
          password: 'revature',
          login: false,
          wins: 0,
          losses: 0,
          tokens: 0
        },
        {
          playerId: 'f9be7b37-aba8-4b3d-8e8e-2f3ae26894b1',
          userName: 'janedoe',
          password: 'revature',
          login: false,
          wins: 0,
          losses: 0,
          tokens: 0
        }
      ] as PlayerViewModel[];
    });

    it('should return an Observable<PlayerViewModel[]>', () => {
      service.getUsers().subscribe(players =>
        expect(players).toEqual(dummyPlayers),
        fail
      );
      const req = httpTestingController.expectOne('https://magic-match-api.azurewebsites.net/api/player/GetPlayers');
      expect(req.request.method).toEqual('GET');
      req.flush(dummyPlayers);
    });

    it('should convert 404 to empty Player', () => {
      service.getUsers().subscribe(players =>
        expect(players.length).toEqual(0, 'should convert 404 error into empty Player'),
        fail
      );
      const req = httpTestingController.expectOne('https://magic-match-api.azurewebsites.net/api/player/GetPlayers');
      const msg = '404 Error';
      req.flush(msg, { status: 404, statusText: 'Not found' });
    });
  });

  describe('#addUser', () => {
    let dummyPlayer: LoginPlayerViewModel;

    beforeEach(() => {
      dummyPlayer = {
        username: 'billy',
        password: 'revature'
      } as LoginPlayerViewModel;
    });

    it('should return void', () => {
      service.addUser(dummyPlayer);
      const req = httpTestingController.expectOne('https://magic-match-api.azurewebsites.net/api/player/CreatePlayer');
      expect(req.request.method).toEqual('POST');
      req.flush(dummyPlayer);
    });
  });

  describe('#updateUser', () => {
    let dummyPlayer: PlayerViewModel;

    beforeEach(() => {
      dummyPlayer = {
        playerId: 'b9084d13-3a7a-4957-89bf-e7618e83e649',
        userName: 'billy',
        password: 'revature',
        login: false,
        wins: 0,
        losses: 0,
        tokens: 0
      } as PlayerViewModel;
    });

    it('should return Observable<any>', () => {
      service.updateUser({
        playerId: dummyPlayer.playerId,
        userName: dummyPlayer.userName,
        password: 0,
        losses: dummyPlayer.losses,
        wins: dummyPlayer.wins,
        tokens: dummyPlayer.tokens,
        login: false,
        collection: {}
      }).subscribe(player =>
        expect(player).toBeTruthy(),
        fail
      );
      const url = 'https://magic-match-api.azurewebsites.net/api/player/EditPlayer';
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('PUT');
      req.flush(dummyPlayer);
    });
  });

  describe('#deleteUser', () => {
    let dummyPlayer: PlayerViewModel;
    const testName: string = 'billy';

    beforeEach(() => {
      dummyPlayer = {
        playerId: 'b9084d13-3a7a-4957-89bf-e7618e83e649',
        userName: 'billy',
        password: 'revature',
        login: false,
        wins: 0,
        losses: 0,
        tokens: 0
      } as PlayerViewModel;
    });

    it('should return an Observable<Duration>', () => {
      service.deleteUser(dummyPlayer).subscribe(player =>
        expect(player.userName).toEqual(testName),
        fail
      );
      const url = 'https://magic-match-api.azurewebsites.net/api/player/DeletePlayer';
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('DELETE');
      req.flush(dummyPlayer);
    });
  });
});
