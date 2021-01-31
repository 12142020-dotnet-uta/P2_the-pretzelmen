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
});
