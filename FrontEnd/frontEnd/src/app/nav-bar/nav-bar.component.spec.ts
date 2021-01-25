import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should contain 'Sign Up' text`, () => {
    const compiled = fixture.nativeElement;
    const elements = compiled.querySelectorAll('.navbar-right > li > a');
    expect(elements[0].textContent).toContain('Sign Up');
  });

  it(`should contain 'Login' text`, () => {
    const compiled = fixture.nativeElement;
    const elements = compiled.querySelectorAll('.navbar-right > li > a');
    expect(elements[1].textContent).toContain('Login');
  });
});
