import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getCards()', () => {
    service.getCards().subscribe(data => {
      expect((data as any[]).length).toBeGreaterThan(0);
    });
  });
});
