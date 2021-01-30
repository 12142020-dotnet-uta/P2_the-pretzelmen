import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddEditUserComponent } from './add-edit-user.component';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
//import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

describe('AddEditUserComponent', () => {
  let component: AddEditUserComponent;
  let fixture: ComponentFixture<AddEditUserComponent>;
  let mockLocation;

  beforeEach(async () => {
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        UserService,
        DataService,
        { provider: Location, useValue: mockLocation }
      ],
      declarations: [ AddEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
