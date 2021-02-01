import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryActionComponent } from './memory-action.component';

describe('MemoryActionComponent', () => {
  let component: MemoryActionComponent;
  let fixture: ComponentFixture<MemoryActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clickedCard()', () => {
    component.clickedCard('sfdsdf', 'fsdfhsdfs');
    expect(component.cards.length).toBeGreaterThan(0);
  });

  it('should shuffle array', () => {
    //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    let str0: string[] = [];
    let str1: string[] = [];
    let amount = (Math.random() * 40) + 1;
    for (let i = 0; i < amount; ++i) {
      const s = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      str0.push(s);
      str1.push(s);
    }
    str0 = component.randomArrayShuffle(str0);
    expect(str0).not.toEqual(str1);
  });
});
