import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetCardsComponent } from './get-cards.component';

describe('GetCardsComponent', () => {
  let component: GetCardsComponent;
  let fixture: ComponentFixture<GetCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCardsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCards()', () => {
    component.getCards();
    expect(component.cards).toBeTruthy();
  });
});
