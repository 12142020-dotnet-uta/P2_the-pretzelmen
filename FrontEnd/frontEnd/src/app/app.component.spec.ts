import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardsComponent,
        NavBarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontEnd'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontEnd');
  });

  it(`should render 'app-nav-bar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const element = compiled.querySelector('app-nav-bar');
    expect(element.innerHTML).toContain('</nav>');
  });
});
